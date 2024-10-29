const mongoose = require('mongoose');

// Helper function to convert UTC to IST
function convertToIST(date) {
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
    return new Date(date.getTime() + istOffset);
}

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    doubts: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        currentTime: () => convertToIST(new Date()), // Convert current time to IST
    }
});

module.exports = mongoose.model('Inquiry', inquirySchema);
