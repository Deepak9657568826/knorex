const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
