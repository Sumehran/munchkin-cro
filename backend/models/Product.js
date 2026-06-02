const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['keyrings', 'plushies', 'flowers', 'accessories', 'wearables', 'bags']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    colors: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: {
        type: [String],
        default: []
    },
    description: {
        type: String,
        default: ''
    },
    materials: {
        type: [String],
        default: []
    },
    dimensions: {
        type: String,
        default: ''
    },
    stock: {
        type: Number,
        default: 0,
        min: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
