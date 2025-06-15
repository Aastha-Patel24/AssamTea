import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import userRoute from './routes/user.route.js';
import productRoute from './routes/product.route.js';
import cartRoute from './routes/cart.route.js';
import orderRoute from './routes/order.route.js';
import contactRoute from './routes/contact.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Assam Tea Backend Running Successfully')
});

app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);
app.use('/api/contact', contactRoute);

const PORT = process.env.port || 5000;
const MONGO_URI = process.env.MONGO_URI;

try {
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log('MongoDB connected');

    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
} catch (error) {
    console.log(error);
}

