const mongoose = require('mongoose');

const customOrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true
    },
    type: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        default: 1,
        min: 1
    },
    colours: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: ''
    },
    occasion: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        default: ''
    },
    deadline: {
        type: String,
        default: 'Flexible'
    },
    referenceImage: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['New Request', 'Under Review', 'Quoted', 'Accepted', 'In Progress', 'Completed', 'Rejected'],
        default: 'New Request'
    }
}, { timestamps: true });

module.exports = mongoose.model('CustomOrder', customOrderSchema);
