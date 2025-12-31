const Contact = require('../models/contactSchema');
const express = require('express');
const router = express.Router();


// POST route to handle contact form submissions
router.post('/contact', async (req, res) => {
    const { username, email, message } = req.body;

    try {
        const newContact = await new Contact({
            username,
            email,
            message
        });

        await newContact.save();
        res.status(201).json({ message: "Contact form submitted successfully!" });
    } catch (error) {
        console.error("Error saving contact form:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;