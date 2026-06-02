const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    qty: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    color: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    items: {
        type: [cartItemSchema],
        default: []
    }
}, { timestamps: true });

cartSchema.virtual('subtotal').get(function () {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
});

cartSchema.set('toJSON', { virtuals: true });
cartSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Cart', cartSchema);
