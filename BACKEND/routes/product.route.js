import express from "express";
import { createProduct,getAllProducts, getProductById } from "../controllers/product.controller.js";
import { authenticateUser } from "../middlewares/isAuthenticated.js";

const router=express.Router();

router.get('/',getAllProducts);

router.get('/:id', getProductById);

router.post('/create',authenticateUser, (req,res,next)=>{
    if(req.user.role !== 'admin')
    {
        return res.status(403).json({message: 'Only admins can add products' });
    }

    next();
}, createProduct)

export default router;