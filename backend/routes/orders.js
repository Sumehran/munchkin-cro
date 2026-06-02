const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const { protect, admin } = require('../middleware/auth');

const shippingCostFromLabel = (shipping) => {
    if (shipping === 'express' || /express/i.test(shipping || '')) return 120;
    if (shipping === 'pickup' || /pickup/i.test(shipping || '')) return 0;
    return 60;
};

router.get('/track', async (req, res) => {
    try {
        const { id, phone } = req.query;
        let order = null;

        if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
            order = await Order.findById(id);
        }

        if (!order && phone) {
            const digits = phone.replace(/\D/g, '');
            order = await Order.findOne({ phone: { $regex: digits, $options: 'i' } });
        }

        if (!order) return res.status(404).json({ message: 'Order not found.' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.get('/', protect, admin, async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/', protect, async (req, res) => {
    try {
        const { customer, phone, address, payment, shipping, notes } = req.body;
        let { items, deliveryCost } = req.body;

        if (!customer || !phone || !address) {
            return res.status(400).json({ message: 'Customer, phone and address are required.' });
        }

        if (!items || items.length === 0) {
            const cart = await Cart.findOne({ user: req.user._id });
            items = cart ? cart.items : [];
        }

        if (!items || items.length === 0) {
            return res.status(400).json({ message: 'Cart is empty.' });
        }

        const cleanItems = items.map(item => ({
            product: item.product,
            name: item.name,
            price: Number(item.price),
            qty: Number(item.qty),
            color: item.color || '',
            image: item.image || ''
        }));

        const subtotal = cleanItems.reduce((sum, item) => sum + item.price * item.qty, 0);
        deliveryCost = deliveryCost === undefined ? shippingCostFromLabel(shipping) : Number(deliveryCost);

        const order = await Order.create({
            user: req.user._id,
            customer,
            phone,
            address,
            payment,
            shipping,
            items: cleanItems,
            subtotal,
            deliveryCost,
            total: subtotal + deliveryCost,
            notes
        });

        await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.patch('/:id/status', protect, admin, async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true, runValidators: true }
        );

        if (!order) return res.status(404).json({ message: 'Order not found.' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
