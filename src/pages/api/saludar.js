import { connectToDatabase } from './connectToDatabase';
//el primero estaba, pero parace que aun no lo uso
/*export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');

  try {
    const documentsCursor = await collection.find({ tipo: 'imagen' });
    const documentsArray = await documentsCursor.toArray();
    return res.status(200).json(documentsArray);
  } catch (error) {
    console.error('Error obteniendo los documentos:', error);
    throw error;
  }
}*/

/*export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');

  try {
    const documentsCursor = await collection.find({
      tags: {
        $elemMatch: { $eq: 'dormir' }
      }
    });

    const documentsArray = await documentsCursor.toArray();
    return res.status(200).json(documentsArray);
  } catch (error) {
    console.error('Error obteniendo los documentos:', error);
    throw error;
  }
}*/