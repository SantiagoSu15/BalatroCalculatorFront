import React from 'react';

function ContenedorBotonesTag({ acciones }) {
  const { eliminarCartasSeleccionadas, obtenerMejorMano } = acciones;

  const botones = [
    { clase: "botonJokerTag" },
    { clase: "botonPlanetaTag" },
    { clase: "botonMejorManoTag", onClick: obtenerMejorMano },

    { clase: "botonAutoManoTag" },
    { clase: "botonEliminarTag", onClick: eliminarCartasSeleccionadas },
  ];

  return (
    <div className="contenedorBotonesTag">
      {botones.map(({ clase, onClick }) => (
        <button
          key={clase}
          className={clase}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default ContenedorBotonesTag;
