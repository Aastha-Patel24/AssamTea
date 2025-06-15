import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    label: String,
    price: Number
}, { _id: false });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Black Tea', 'Green Tea', 'Herbal Tea'],
        required: true,
    },

    stock: {
        type: Number,
        default: 0
    },
    ratingStars: {
        type: Number,
        default: 0
    },

    noOfRatings: {
        type: Number,
        deafult: 0
    },
    availableSizes: [sizeSchema],

    description: {
        type: String,

    },

    productLife: {
        type: String,
    },
    instuctions: {
        type: String,
    },
    temperature: {
        type: String,
    }

}, {
    timestamps: true,
});

export default mongoose.model('Product', productSchema);