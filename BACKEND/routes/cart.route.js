import express from "express";
import { addToCart, getCart, removeFromCart, updateCartItem } from '../controllers/cart.controller.js';
import { authenticateUser } from "../middlewares/isAuthenticated.js";

const router= express.Router();

router.use(authenticateUser);

router.get('/getcart',getCart);
router.post('/add',addToCart);
router.delete('/remove',removeFromCart);
router.put('/update',updateCartItem);

export default router;