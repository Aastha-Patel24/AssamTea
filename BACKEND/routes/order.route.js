import express from "express";
import { placeOrder , cancelOrder, updateStatus, getMyOrders, getAllOrders} from "../controllers/order.controller.js";
import { authenticateUser } from "../middlewares/isAuthenticated.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router=express.Router();


router.post('/place', authenticateUser, placeOrder);
router.patch('/cancel/:orderId', authenticateUser, cancelOrder);
router.put('/admin/status/:orderId', authenticateUser, isAdmin, updateStatus);
router.get('/my-orders',authenticateUser, getMyOrders);
router.get('/admin/orders',authenticateUser, isAdmin, getAllOrders);

export default router;
