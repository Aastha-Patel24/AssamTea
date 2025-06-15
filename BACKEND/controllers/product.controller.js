import Product from "../models/Product.js";

export const createProduct = async (req,res)=>{
    try {
        const { name,image,price,category,stock,ratingStars,description,noOfRatings, availableSizes,productLife,instructions,temperature}=req.body;

        if (!name || !image || !price || !category) {
      return res.status(400).json({ message: "Name, image,price, and category are required" });
    }

    const product = await Product.create({
        name,image,price,category,stock,ratingStars, description,noOfRatings, availableSizes,productLife,instructions,temperature
    });

    return res.status(201).json({
        success:true,
        message:"Product created successfully",
        product
    });
    
    } catch (error) {
        console.log(error);
    }
}

export const getAllProducts = async (req,res)=>{
    try {
        const products = await Product.find().sort({createdAt: -1}); //Newest first

        return res.status(200).json({
            message:"Available products",
            success:true,
            total:products.length,
            products
        });

    } catch (error) {
        console.log(error);
    }
}

export const getProductById= async(req,res)=>{
    try {
        const productId=req.params.id;

        const product=await Product.findById(productId);

        if(!product)
        {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        return res.status(200).json({
            success:true,
            product
        });

    } catch (error) {
        console.log(error);
          return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}