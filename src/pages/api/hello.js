//import { MongoClient, ObjectId } from 'mongodb';
import { createDocument } from './createDocument';
import { getDocumentsByTipo } from './getDocumentsByTipo';

console.log(getDocumentsByTipo('imagen'));

async function readDocuments() {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');
  const documents = await collection.find().toArray();
  return documents;
}

async function updateDocument(id, updatedData) {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');
  const result = await collection.updateOne(
    { _id: ObjectId(id) },
    { $set: updatedData }
  );
  return result;
}

async function deleteDocument(id) {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  return result;
}

// Ruta API

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const documents = await readDocuments();
        res.status(200).json(documents);
      } catch (error) {
        console.error('Error en la ruta API:', error);
        res.status(500).json({ message: 'Error en la ruta API', error: error.message });
      }
      break;

    case 'POST':
      try {
        const result = await createDocument(body);
        res.status(200).json({ message: 'Documento insertado en la colección', insertedId: result.insertedId });
      } catch (error) {
        console.error('Error en la ruta API:', error);
        res.status(500).json({ message: 'Error en la ruta API', error: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id, updatedData } = body;
        const result = await updateDocument(id, updatedData);
        res.status(200).json({ message: 'Documento actualizado en la colección' });
      } catch (error) {
        console.error('Error en la ruta API:', error);
        res.status(500).json({ message: 'Error en la ruta API', error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = body;
        const result = await deleteDocument(id);
        res.status(200).json({ message: 'Documento eliminado de la colección' });
      } catch (error) {
        console.error('Error en la ruta API:', error);
        res.status(500).json({ message: 'Error en la ruta API', error: error.message });
      }
      break;

    default:
      res.status(405).end(); // Método no permitido
      break;
  }
}






