import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const placeOrder = async (req, res) => {
    try {
        const userId = req.user.id;

        //  Buy Now from Product Page
        const { items: directItems = [] } = req.body || {};



        let orderItems = [];
        let totalPrice = 0;

        if (directItems && directItems.length > 0) {
            orderItems = await Promise.all(
                directItems.map(async (item) => {

                    const product = await Product.findById(item.product);

                    if (!product) throw new Error('Product not found');


                    const matchedSize = product.availableSizes.find(s => s.label === item.size);

                    if (!matchedSize) throw new Error('Invalid size selected');

                    return {
                        product: product._id,
                        size: item.size,
                        quantity: item.quantity,
                        price: matchedSize.price
                    };

                })
            )

            totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        }

        else {
            //  Checkout from Cart

            const cart = await Cart.findOne({ user: userId }).populate('items.product');
            if (!cart || cart.items.length === 0) {
                return res.status(400).json({ message: 'Cart is empty' });
            }

            orderItems = cart.items.map(item => {

                console.log("Product Sizes:", item.product.availableSizes);
                console.log("User Selected Size:", item.size);


                const matchedSize = item.product.availableSizes.find(s => s.label === item.size);

                const price = matchedSize ? matchedSize.price : item.product.price;

                return {
                    product: item.product._id,
                    size: item.size,
                    quantity: item.quantity,
                    price
                }
            });

            totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

            cart.items = cart.items.filter(cartItem => {
                return !orderItems.some(ordered =>
                    cartItem.product.toString() === ordered.product.toString() &&
                    cartItem.size === ordered.size
                )
            });

            await cart.save();
        }

        const order = await Order.create({
            user: userId,
            items: orderItems,
            totalPrice
        });

        return res.status(201).json({ message: 'Order placed successfully', order });

    } catch (error) {
        console.log(error);
    }
}


export const cancelOrder = async (req, res) => {
    try {
        const userId = req.user.id;

        const { orderId } = req.params;

        const order = await Order.findOne({ _id: orderId, user: userId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (order.status === 'Cancelled') {
            return res.status(400).json({ message: 'Order already cancelled' });
        }
        if (order.status === 'Delivered') {
            return res.status(400).json({ message: 'Delivered orders cannot be cancelled' });
        }

        order.status = 'Cancelled';
        await order.save();

        return res.status(200).json({ message: 'Order cancelled successfully', order });

    } catch (error) {
        console.log(error);
    }
}

//Update order status(Admin only) 
export const updateStatus = async (req, res) => {

    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ['Pending', 'Placed', 'Shipped', 'Delivered', 'Cancelled'];

    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    try {
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = status;
        await order.save();

        return res.status(200).json({ message: 'Order status updated successfully', order });

    } catch (error) {
        console.log(error);
    }

}

// User
export const getMyOrders = async(req,res)=>{
    try {
        const userId= req.user.id;

        const orders= await Order.find({ user: userId})
            .populate('items.product', 'name image')
            .sort({ createdAt : -1});
        
            return res.status(200).json({orders});

    } catch (error) {
        console.log(error);
    }
}

// Admin
export const getAllOrders= async(req,res)=>{
    try {
        const orders= await Order.find().populate('user', 'name email');
        return res.status(200).json({orders});
    } catch (error) {
        console.log(error);
    }
}