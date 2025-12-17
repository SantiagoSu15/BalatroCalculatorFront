import React from 'react';
import { getCartaStyle } from '../hooks/cartasUtils';


//Cartas en su contenedor el q esta abajo 
const CartasSeleccionadas = ({ cartas }) => {
  return (
    <div className="contenedorCartas1" id="cartasSeleccionadas">
      {cartas.map((carta, idx) => (
        <div key={idx} className="miniContenedor">
          <div 
            className="test"
            style={getCartaStyle(carta)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default CartasSeleccionadas;