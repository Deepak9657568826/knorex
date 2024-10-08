const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.monngoDB_URL);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
