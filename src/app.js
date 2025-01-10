const express = require('express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./auth/auth');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/auth', authRoutes); // Authentication-related routes
app.use('/user', userRoutes); // User-related routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
