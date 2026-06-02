const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/auth');

router.get('/', async (req, res) => {
    try {
        const query = req.query.includeInactive === 'true' ? {} : { isActive: true };
        const products = await Product.find(query).sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found.' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/', protect, admin, async (req, res) => {
    try {
        const { name, category, price, colors, image, images, description, materials, dimensions, stock } = req.body;

        if (!name || !category || price === undefined) {
            return res.status(400).json({ message: 'Name, category and price are required.' });
        }

        const product = await Product.create({
            name,
            category,
            price,
            colors,
            image,
            images,
            description,
            materials,
            dimensions,
            stock
        });

        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.patch('/:id', protect, admin, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!product) return res.status(404).json({ message: 'Product not found.' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found.' });
        res.json({ message: 'Product deleted.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
