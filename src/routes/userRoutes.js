const express = require('express');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

// Example protected route
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'This is a protected user profile', user: req.user });
});

module.exports = router;

