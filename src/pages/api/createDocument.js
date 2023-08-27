
import { connectToDatabase } from './connectToDatabase'; // Asegúrate de importar connectToDatabase correctamente

export async function createDocument(data) {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');
  const result = await collection.insertOne(data);
  return result;
}
