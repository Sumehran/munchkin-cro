const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const User    = require('../models/User');
const { protect, admin } = require('../middleware/auth');

// ── Helper: generate JWT token ──
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const sendAuthResponse = (res, user, message = 'Success', statusCode = 200) => {
    const token = generateToken(user._id);

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000
    });

    res.status(statusCode).json({
        message,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
};

// ── POST /api/auth/register ──
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password)
            return res.status(400).json({ message: 'Please fill in all fields.' });

        if (password.length < 6)
            return res.status(400).json({ message: 'Password must be at least 6 characters.' });

        const existing = await User.findOne({ email });
        if (existing)
            return res.status(400).json({ message: 'An account with this email already exists.' });

        const user = await User.create({ name, email, password });

        sendAuthResponse(res, user, 'Account created successfully!', 201);

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// ── POST /api/auth/login ──
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ message: 'Please fill in all fields.' });

        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).json({ message: 'Incorrect email or password.' });

        const isMatch = await user.matchPassword(password);
        if (!isMatch)
            return res.status(401).json({ message: 'Incorrect email or password.' });

        sendAuthResponse(res, user, 'Login successful!');

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// ── GET /api/auth/users — all users (admin) ──
router.get('/users', protect, admin, async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// ── DELETE /api/auth/users/:id ──
router.delete('/users/:id', protect, admin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.get('/me', protect, (req, res) => {
    res.json({ user: req.user });
});

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out.' });
});

module.exports = router;
