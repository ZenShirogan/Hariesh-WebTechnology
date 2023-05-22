const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
const dbName = 'your-database-name'; // Update with your database name

let db = null;

async function connectDB() {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

function getDB() {
  return db;
}

module.exports = {
  connectDB,
  getDB
};
