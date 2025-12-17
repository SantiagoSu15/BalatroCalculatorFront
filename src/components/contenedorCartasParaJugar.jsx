import React from 'react';


// contenedor con todas las cartas para jugar y onSelectCarta es la funcion para seleccionar una carta
const ModalBaraja = ({ cartas, onSelectCarta }) => {
  return ( 
    <div className="contenedorCartasParaJugar" id="cartasJugar" style={{ display: 'grid' }}> 
      {cartas.map((carta) => (
        <div
          key={carta.id}
          className="carta"
          data-numero={carta.id} 
          style={{
            backgroundPosition: `${carta.x}% ${carta.y}%, 16.7% 0%` // 16.7% 0% es la posicion del fondo de la carta en la imagen grande hacerlo aca porq viene del js
          }}
          onClick={() => onSelectCarta(carta.id)}
        ></div>
      ))}
    </div>
  );
};

export default ModalBaraja;