const express = require('express');
const connectDB = require('./config/connectDB');
const contactRoute = require('./Routes.js/contactRoute');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use contact route
app.use('/api', contactRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
