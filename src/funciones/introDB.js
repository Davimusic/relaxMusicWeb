import { variablesGlobales } from "./VariablesGlobales";

/*export async function introDB() {
    try {
      const response = await fetch('/api/createDocument');
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
};*/


export async function introDB() {
    console.log(JSON.stringify(variablesGlobales().getFiltrarDB()['tags']));
    try {
        const response = await fetch('/api/createDocument', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(variablesGlobales().getFiltrarDB()['tags']), // Convierte los datos a formato JSON
        });

        if (response.ok) {
            const data = await response.json();

            console.log('Respuesta del servidor:', data);

            return data; // Puedes devolver datos desde el servidor si es necesario
        } else {
            console.error('Error al enviar datos al servidor.');
            return null;
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        return null;
    }
}