import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const addToCart =async(req,res)=>{

    const userId=req.user.id;
    const {productId,size,quantity}=req.body;

    if(!productId || !size || !quantity){
        return res.status(400).json({message:"Missing fields"});
    }

    try {
        
        let cart=await Cart.findOne({user:userId});

        const product= await Product.findById(productId);
        if(!product) return res.status(404).json({message:"Product not found"});

        const item={
            product:productId,
            size,
            quantity
        }

        if(!cart)
        {
            cart=await Cart.create({user:userId, items: [item]});
        }
        else{

            const index= cart.items.findIndex(i=> i.product.toString() === productId && i.size===size);

            if(index>-1)
            {
                cart.items[index].quantity+=quantity;

            }
            else{
                cart.items.push(item);
            }
            await cart.save();
        }
        return res.status(200).json({
            success:true,
            message:"Product added to cart",
            cart
        })
    } catch (error) {
        console.log(error);
    }
}

// Get user cart

export const getCart= async(req,res)=>{
    try {
        const cart=await Cart.findOne({user:req.user.id})
        .populate('items.product');

        if(!cart){
            return res.status(200).json({success:true, items:[]});
        }

        return res.status(200).json({success:true, items:cart.items});
    } catch (error) {
        console.log(error);
    }
}

export const removeFromCart= async(req,res)=>{
    const {productId,size}=req.body;

    try {
        const cart= await Cart.findOne({user: req.user.id});
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const originlength=cart.items.length;

        cart.items= cart.items.filter(
            item=> !(item.product.toString()=== productId && item.size===size)
        );
        const newlength=cart.items.length;

        if(originlength === newlength)
        {
            return res.status(404).json({
                success:false,
                message:"Item not found with the specified size"
            });
        }

        await cart.save();

        return res.status(200).json({
            success:true,
            message:"Item removed",
            cart
        });

    } catch (error) {
        console.log(error);
    }
}

export const updateCartItem = async(req,res)=>{

    const userId= req.user.id;
    const {productId,size,quantity}= req.body;

    if(!productId || !size || typeof quantity !== 'number' || quantity<1){
        return res.status(400).json({message: "Invalid input"});
    }

    try {
        const cart = await Cart.findOne({user:userId});

        if(!cart) return res.status(404).json({message:"Cart not found"});

        const index= cart.items.findIndex(
            item => item.product.toString() === productId && item.size === size
        )

        if(index===-1)
        {
            return res.status(404).json({
                message: "Item not found in cart"
            });
        }

        cart.items[index].quantity=quantity;

        await cart.save();

        return res.status(200).json({
            message:"Quantity updated",
            cart
        });
    } catch (error) {
        console.log(error);
    }
}