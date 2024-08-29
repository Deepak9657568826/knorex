const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser, exportUsers } = require('../controllers/userController');

// Route to get all users
router.get('/', getUsers);

// Route to create a new user
router.post('/', createUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

// Route to export users data
router.post('/export', exportUsers);

module.exports = router;
