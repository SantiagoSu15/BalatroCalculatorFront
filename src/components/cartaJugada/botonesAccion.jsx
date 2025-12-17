import React from 'react';

const BotonesAccion = ({ onAtras, onConfirmar, onCerrar }) => {
  return (
    <>
      <button className="botonAtras" onClick={onAtras}>
        &larr;
      </button>
      <button className="botonJugarCarta" onClick={onConfirmar}>
        Seleccionar
      </button>
      <button className="botonEliminarCarta" onClick={onCerrar}>
        X
      </button>
    </>
  );
};

export default BotonesAccion;