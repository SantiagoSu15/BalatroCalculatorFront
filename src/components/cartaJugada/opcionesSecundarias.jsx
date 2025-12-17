import React from 'react';
import { getCartaStyle, calcularColumnas } from '../../hooks/cartasUtils';

const OpcionesSecundarias = ({ opciones, onSeleccionarOpcion }) => {
  if (opciones.length === 0) return null;

  return (
    <div 
      className="miniContenedor2" 
      id="contenedorBotones2" 
      style={{ 
        display: 'grid',
        gridTemplateColumns: `repeat(${calcularColumnas(opciones.length)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.ceil(opciones.length / calcularColumnas(opciones.length))}, 1fr)`
      }}
    >
      {opciones.map((opcion, idx) => (
        <div key={idx} className="miniContenedor2">
          <div
            className="test"
            style={getCartaStyle(opcion)}
            onClick={() => onSeleccionarOpcion(opcion)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default OpcionesSecundarias;