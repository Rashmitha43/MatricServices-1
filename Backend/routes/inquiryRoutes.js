const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const EmailSender = require('../controllers/mail_controller')
// CREATE: Add a new inquiry
router.post('/inquiries', async (req, res) => {
    // console.log(req.body);

    try {
        const inquiry = new Inquiry(req.body);
        await inquiry.save();
        res.status(201).json(inquiry);
        const sender = new EmailSender();
        const body = ` 
            <p>Dear Sir,</p>
            <p>Greetings of the day!</p>
            <p style="color: black;>New Inquiry from <strong>${req.body.name}</strong></p>
            <p><strong>Student Name:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>College/Institute:</strong> ${req.body.college}</p>
          <p><strong>Inquiry:</strong> ${req.body.doubts}</p>
          <p><strong>Phone:</strong> ${req.body.phone}</p>
          <p><strong>This mail was Generated Autonomous Please <span style="color: red;">DO NOT</span> reply to this mail.</strong>
          <p>Thank you.</p>
          `
        await sender.sendEmail(req.body);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ: Get all inquiries
router.get('/inquiries', async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ: Get a specific inquiry by ID
router.get('/inquiries/:id', async (req, res) => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);
        if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
        res.json(inquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE: Update an inquiry by ID
router.put('/inquiries/:id', async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
        res.json(inquiry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: Delete an inquiry by ID
router.delete('/inquiries/:id', async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
        if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
        res.json({ message: 'Inquiry deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
