const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

// Catch-all route for SPA (if needed)
app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

// Export the Express app as a serverless function
module.exports = app;