import express from "express";
import { register,login,logout, frogotPassword, resetPassword } from "../controllers/user.controller.js";
import { authenticateUser } from "../middlewares/isAuthenticated.js";
const router=express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgot-password', frogotPassword);
router.post('/reset-password/:token', resetPassword);

// for testing 
router.get('/profile', authenticateUser,async (req, res) => {
  // can access req.user.id or req.user.role
  res.status(200).json({ message: "This is a protected route", user: req.user });
});

export default router;