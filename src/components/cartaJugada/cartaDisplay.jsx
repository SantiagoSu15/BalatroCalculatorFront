import React from 'react';
import { getCartaStyle } from '../../hooks/cartasUtils';

const CartaDisplay = ({ carta }) => {
  return (
    <div className="miniContenedor">
      <div className="contenedorCarta">
        <div className="contenedorCarta2" id="cartaSeleccionada">
          <div 
            className="test"
            style={getCartaStyle(carta)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CartaDisplay;