const express = require('express');
const router = express.Router();
const CustomOrder = require('../models/CustomOrder');
const { protect, admin } = require('../middleware/auth');

router.get('/', protect, admin, async (req, res) => {
    try {
        const orders = await CustomOrder.find().populate('user', 'name email').sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, phone, email, type, qty, colours, size, occasion, description, budget, deadline, referenceImage } = req.body;

        if (!name || !phone || !type || !description) {
            return res.status(400).json({ message: 'Name, phone, type and description are required.' });
        }

        const order = await CustomOrder.create({
            name,
            phone,
            email,
            type,
            qty,
            colours,
            size,
            occasion,
            description,
            budget,
            deadline,
            referenceImage
        });

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.patch('/:id/status', protect, admin, async (req, res) => {
    try {
        const order = await CustomOrder.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true, runValidators: true }
        );

        if (!order) return res.status(404).json({ message: 'Custom order not found.' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
