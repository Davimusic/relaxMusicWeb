import { connectToDatabase } from './connectToDatabase';
import { variablesGlobales } from '@/funciones/VariablesGlobales';


/*export default async function getDocumentsByTipo(req, res) {
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

export default async function getDocumentsByTipo(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('primerRelaxProject');

  let filtro = variablesGlobales().getFiltrarDB()
  let llave = Object.keys(filtro)[0]
  let valor = filtro[llave]

  if(llave === 'tags'){
    try {
      const documentsCursor = await collection.find({
        tags: {
          $elemMatch: { $eq: valor }
        }
      });
  
      const documentsArray = await documentsCursor.toArray();
      const responseObj = {
        documentos: documentsArray,
        llave: llave,
        otroDato: valor,
        // Agrega más propiedades según sea necesario
      };
      return res.status(200).json(responseObj);
    } catch (error) {
      console.error('Error obteniendo los documentos:', error);
      throw error;
    }
  } else {
    alert('la llave no es tags')
  }
}