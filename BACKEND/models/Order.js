import mongoose from "mongoose";

const orderSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
            },

            size:String,

            quantity:{
                type:Number,
                required:true
            },

            price:Number

        }
    ],

    totalPrice:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        enum:['Pending','Placed','Shipped','Delivered','Cancelled'],
        default:'Pending'
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

},{
    timestamps:true
});

export default mongoose.model('Order',orderSchema);