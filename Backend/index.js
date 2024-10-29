require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const EmailSender = require('./controllers/mail_controller')

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
// const itemRoutes = require('./routes/itemroutes');
// app.use('/api', itemRoutes);
const inquiryRoutes = require('./routes/inquiryRoutes');
app.use('/api', inquiryRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');

}).catch((error) => {
    console.error('Connection error', error);
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
