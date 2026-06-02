const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
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
        min: 1
    },
    color: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
}, { _id: false });

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    customer: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    payment: {
        type: String,
        default: 'bKash'
    },
    shipping: {
        type: String,
        default: 'Standard Delivery'
    },
    items: {
        type: [orderItemSchema],
        required: true,
        validate: value => value.length > 0
    },
    subtotal: {
        type: Number,
        required: true,
        min: 0
    },
    deliveryCost: {
        type: Number,
        default: 0,
        min: 0
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    notes: {
        type: String,
        default: ''
    }
}, { timestamps: true });

orderSchema.virtual('itemsText').get(function () {
    return this.items.map(item => `${item.name} x${item.qty}`).join(', ');
});

orderSchema.set('toJSON', { virtuals: true });
orderSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Order', orderSchema);
