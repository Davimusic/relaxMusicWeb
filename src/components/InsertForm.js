import React, { useState } from 'react';

const InsertForm = () => {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ campo1, campo2 }),
      });

      if (response.ok) {
        alert('Datos insertados exitosamente.');
      } else {
        alert('Error al insertar datos.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la solicitud.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Campo 1:
        <input
          type="text"
          value={campo1}
          onChange={(e) => setCampo1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Campo 2:
        <input
          type="text"
          value={campo2}
          onChange={(e) => setCampo2(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Insertar</button>
    </form>
  );
};

export default InsertForm;
