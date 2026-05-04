const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const dotenv   = require('dotenv');
const path     = require('path');

dotenv.config();

const app = express();

// ── Middleware ──
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Serve frontend ──
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// ── API Routes ──
app.use('/api/auth',          require('./routes/auth'));
app.use('/api/products',      require('./routes/products'));
app.use('/api/orders',        require('./routes/orders'));
app.use('/api/custom-orders', require('./routes/customOrders'));

// ── Fallback ── (fixed wildcard for newer Express)
app.use((req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// ── Connect MongoDB + Start Server ──
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.error('MongoDB error:', err));