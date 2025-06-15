import jwt from "jsonwebtoken";

export const authenticateUser= async(req, res, next) =>{
    try {
        const token=req.cookies.token;

        if(!token)
        {
            return res.status(401).json({message: "Unauthorized: No token"});
        }

        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        req.user= decoded;  // { id, role }

        next();

    } catch (error) {
         return res.status(401).json({ message: "Invalid or expired token" });
    }
}

