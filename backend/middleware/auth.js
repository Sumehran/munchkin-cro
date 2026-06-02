const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    try {
        const header = req.headers.authorization || '';
        const headerToken = header.startsWith('Bearer ') ? header.split(' ')[1] : null;
        const token = req.cookies?.token || headerToken;

        if (!token) {
            return res.status(401).json({ message: 'Not authorized. Please log in.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({ message: 'User not found.' });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Not authorized. Token failed.' });
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') return next();
    res.status(403).json({ message: 'Admin access required.' });
};

module.exports = { protect, admin };
