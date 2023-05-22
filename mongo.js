import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB connection string

const client = new MongoClient(uri, { useUnifiedTopology: true });

let db;

const connectToMongo = async () => {
  try {
    await client.connect();
    db = client.db(); // Replace with your database name
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

const getDB = () => {
  return db;
};

export { connectToMongo, getDB };
