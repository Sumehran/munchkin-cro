const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all your HTML, CSS, JS files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Test route — just to confirm the server works
app.get('/api/test', (req, res) => {
    res.json({ message: 'munchkin.cro server is running!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});