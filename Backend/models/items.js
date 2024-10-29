const mongoose = require('mongoose');

// Helper function to convert UTC to IST
function convertToIST(date) {
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
    return new Date(date.getTime() + istOffset);
}

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        currentTime: () => convertToIST(new Date()), // Converts the current time to IST
    }
});

module.exports = mongoose.model('Item', itemSchema);
