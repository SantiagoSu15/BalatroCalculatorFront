import React from 'react';

const opcionesCarta = [
  { id: 'encantamiento', label: 'Encantamiento' },
  { id: 'edicion', label: 'Edicion' },
  { id: 'sello', label: 'Sello' }
];

const BotonesOpcionesCarta = ({ onPonerElementos, mostrar }) => {
  if (!mostrar) return null;

  return (
    <div className="contenedorBotones" id="contenedorBotones" style={{ display: 'flex' }}>
      {opcionesCarta.map((opcion) => (
        <button 
          key={opcion.id}
          className="tipoCarta" 
          id={`${opcion.id}Carta`}
          onClick={() => onPonerElementos(opcion.id)}
        >
          {opcion.label}
        </button>
      ))}
    </div>
  );
};

export default BotonesOpcionesCarta;