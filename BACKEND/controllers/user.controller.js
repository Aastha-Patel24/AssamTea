import dotenv from 'dotenv';
dotenv.config();
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from "nodemailer";
import validator from "validator";
import crypto from "crypto";


// Nodemailer

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS //Use App Password
    }
});

const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@!%*?&])[A-Za-z\d$@!%*?&]{6,}$/.test(password);
}

// Signup
export const register = async (req, res) => {
    const { fullname, contactNo, address,city,state,pincode, email, password, role , confirmPassword} = req.body

    try {

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

         if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        if (!isValidPassword(password)) {
            return res.status(400).json({
                message: "Password must be at least 6 characters and include at least 1 uppercase letter, 1 lowercase letter, and 1 special character"
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 11);

        const user = await User.create({
            fullname,
            contactNo,
            address,
            city,
            state,
            pincode,
            email,
            password: hashedPassword,
            role
        });

        return res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        return res.status(500).json({ message: 'Registration failed', error: error.message });
    }
}

// Login
export const login = async (req, res) => {
    // console.log("REQ BODY = ", req.body);

    const { email, password } = req.body;

    try {

        if (!email || !password ) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: 'User not found' });

        // if (role !== user.role) {
        //     return res.status(403).json({ message: `Unauthorized: User is not a ${role}` });
        // }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        //     expiresIn: '1d'
        // });

        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        return res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'None',
            maxAge: 1 * 24 * 60 * 60 * 1000

        })
            .status(200).json({
                message: "Login successful",
                user: {
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    // role: user.role
                }
            });

    } catch (error) {
        return res.status(500).json({ message: 'Login failed', error: error.message });
    }
}

// Forfot Password
export const frogotPassword = async (req, res) => {

    // console.log('EMAIL_USER:', process.env.EMAIL_USER);
    // console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '******' : 'Missing');

    const { email } = req.body;

    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            // Do NOT reveal that user doesn't exist
            return res.status(200).json({ message: 'If the email exists, a reset link has been sent' });
        }


        const token = crypto.randomBytes(32).toString('hex');
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        await user.save({ validateBeforeSave: false });

        const resetLink = `http://localhost:5173/reset-password/${token}`;


        console.log('🔗 Reset link:', resetLink);

        try {
            await transporter.sendMail({
                from: `"AssamTea" <${process.env.EMAIL_USER}>`,
                to: user.email,
                subject: "Password Reset Request ",
                html: `<p>You requested a password reset.  <a href="${resetLink}">Click here</a> to reset your password. This link will expire in 1 hour.</p>`
            });


            return res.status(200).json({
                message: "Reset email sent successfully"
            })
        }
        catch (err) {
            console.error(' Failed to send reset email:', err.message);
        }
    } catch (error) {
        console.log(error);
    }
}

// Reset Password

// export const resetPassword = async (req, res) => {
//     const { token } = req.params;
//     const { newPassword } = req.body;

//     try {
//         if (!isValidPassword(newPassword)) {
//             return res.status(400).json({
//                 message: "Password must include 1 uppercase, 1 lowercase, 1 special character and be at least 6 characters'"
//             });
//         }

//         const user = await User.findOne({
//             resetToken: token,
//             resetTokenExpiration: { $gt: Date.now() }
//         });

//         if (!user) {
//             return res.status(400).json({ message: 'Token is invalid or has expired' });
//         }

//         user.password = await bcrypt.hash(newPassword, 11);
//         user.resetToken = undefined;
//         user.resetTokenExpiration = undefined;

//         await user.save();

//         return res.status(200).json({
//             message: 'Password reset successful'
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        // Validate password strength
        if (!isValidPassword(password)) {
            return res.status(400).json({
                message: "Password must include 1 uppercase, 1 lowercase, 1 special character and be at least 6 characters"
            });
        }

        // Find user with valid reset token
        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiration: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Token is invalid or has expired' });
        }

        // Update password and clear token
        user.password = await bcrypt.hash(password, 11);
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        await user.save({ validateBeforeSave: false });

        return res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.error("Error in resetPassword:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const logout = (req, res) => {
    return res.clearCookie('token').json({ message: 'Logged out successfully' });
};