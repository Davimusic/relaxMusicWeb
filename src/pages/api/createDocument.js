
import { connectToDatabase } from './connectToDatabase'; // Asegúrate de importar connectToDatabase correctamente
import { variablesGlobales } from '@/funciones/VariablesGlobales';

export default async function createDocument(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');

  /*try { para ingresar nueva info
    // Accede a los datos enviados desde el cliente en req.body
    const datosRecibidos = req.body;

    // Inserta los datos en la base de datos
    const result = await collection.insertOne(datosRecibidos);

    // Responde al cliente con el resultado de la inserción
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al insertar los datos en la base de datos:', error);
    throw error;
  }*/

  try {
    // Accede al valor que deseas buscar desde el cliente en req.body.tag
    const tagBuscado = req.body;

    // Realiza una búsqueda en MongoDB para encontrar documentos que contengan el tag buscado en el arreglo 'tags'
    const documentsCursor = await collection.find({
      tags: {
        $in: [tagBuscado],
      },
    });

    // Convierte los resultados a un array
    const documentsArray = await documentsCursor.toArray();
    
    // Responde al cliente con los documentos encontrados
    return res.status(200).json(documentsArray)
  } catch (error) {
    console.error('Error al buscar documentos en la base de datos:', error);
    throw error;
  }
}


