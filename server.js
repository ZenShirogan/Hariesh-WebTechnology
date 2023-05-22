const express = require('express');
const app = express();
const { getDB } = require('./db');

// Other server configuration and middleware setup

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const db = getDB();
    const collection = db.collection('contacts');
    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date()
    });

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error('Failed to save contact form data', err);
    res.status(500).json({ error: 'An error occurred while saving the contact form data' });
  }
});

// Define other API routes and server logic

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
