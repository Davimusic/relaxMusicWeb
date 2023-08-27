import React from 'react';
import { arrePadre } from '../funciones/RetornarInfoAudios';

const DocumentListByTipo = () => {
  const handleFetchDocuments = async () => {
    try {
      const response = await fetch('/api/getDocumentsByTipo');
      if (response.ok) {
        const data = await response.json();
        console.log('Documentos con tipo "imagen":', data);
        arrePadre().setArrePadre(data)
        console.log(arrePadre().getArrePadre());

      } else {
        console.error('Error al obtener documentos.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <h2>Documentos con tipo "imagen"</h2>
      <button onClick={handleFetchDocuments}>Obtener Documentos</button>
    </div>
  );
};

export default DocumentListByTipo;