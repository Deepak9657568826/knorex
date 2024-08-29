const User = require('../models/userModel');
const { exportToCSV } = require('../utils/csvExport');




// List all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new user
const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Export selected users
const exportUsers = async (req, res) => {
    try {
        const users = await User.find();
        const csv = exportToCSV(users);
        res.attachment('users.csv').send(csv);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    exportUsers,
};
