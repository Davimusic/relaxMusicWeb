import { MongoClient, ObjectId } from 'mongodb';

let cachedDb = null;

export async function connectToDatabase() {
    const uri = 'mongodb+srv://davis123:davis123@cluster0.hujqu.mongodb.net/test3';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



    if (cachedDb) {
      return cachedDb;
    }
  
  
    try {
      await client.connect();
      const db = client.db('relaxProject');
      cachedDb = db;
      return db;
    } catch (error) {
      console.error('Error conectando a MongoDB:', error);
      throw error;
    }
  }