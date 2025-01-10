const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // For protected routes

const router = express.Router();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected route (requires ATProtocol session or other)
router.get('/profile', authMiddleware, userController.getProfile);

module.exports = router;

