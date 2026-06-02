const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { protect } = require('../middleware/auth');

const emptyCart = (userId) => ({
    user: userId,
    items: [],
    subtotal: 0
});

router.get('/', protect, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        res.json(cart || emptyCart(req.user._id));
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/items', protect, async (req, res) => {
    try {
        const { productId, color = '', qty = 1 } = req.body;

        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required.' });
        }

        const product = await Product.findById(productId);
        if (!product || !product.isActive) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) cart = await Cart.create({ user: req.user._id, items: [] });

        const existing = cart.items.find(item =>
            item.product.toString() === product._id.toString() &&
            item.color.toLowerCase() === color.toLowerCase()
        );

        if (existing) {
            existing.qty += Number(qty);
        } else {
            cart.items.push({
                product: product._id,
                name: product.name,
                price: product.price,
                qty: Number(qty),
                color,
                image: product.image
            });
        }

        await cart.save();
        res.status(201).json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.patch('/items/:itemId', protect, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).json({ message: 'Cart not found.' });

        const item = cart.items.id(req.params.itemId);
        if (!item) return res.status(404).json({ message: 'Cart item not found.' });

        const qty = Number(req.body.qty);
        if (!qty || qty < 1) {
            item.deleteOne();
        } else {
            item.qty = qty;
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.delete('/items/:itemId', protect, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).json({ message: 'Cart not found.' });

        const item = cart.items.id(req.params.itemId);
        if (!item) return res.status(404).json({ message: 'Cart item not found.' });

        item.deleteOne();
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.delete('/', protect, async (req, res) => {
    try {
        const cart = await Cart.findOneAndUpdate(
            { user: req.user._id },
            { items: [] },
            { new: true, upsert: true }
        );

        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
