import { variablesGlobales } from "./VariablesGlobales";

export async function handleFetchDocuments() {
    try {
      const response = await fetch('/api/getDocumentsByTipo');
      if (response.ok) {
        const data = await response.json();
        console.log('Documentos con tipo "valor":', data);

        return data.documentos
      } else {
        console.error('Error al obtener documentos.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
};

