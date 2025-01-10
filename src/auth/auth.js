const express = require('express');
const { authenticateWithAtProtocol } = require('../auth/atprotoAuth');
const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authenticateWithAtProtocol(username, password);
    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
