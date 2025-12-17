import React from 'react';
import ContenedorBotonesTag from './contenedorBotonesTag';




const Sidebar = ({ puntaje, fichas, multi, mano, acciones }) => {
  
  const { onEliminar,onEvaluar  } = acciones;

  return (
    <div className="sidebar">
      <div className="logo">
        <img alt="" src="/recursos/Balatrologo.png" />
      </div>
      
      <div className="contenedorCiega">
        <button className="Ciega"></button>
        <p>ciegas</p>
      </div>

      <div className="contenedorPuntaje">
        <p>Puntaje</p>
        <div className="miniContenedor">
          <span className="puntaje">{puntaje}</span>
        </div>
      </div>

      <div className="contenedorMano">
        <span id="mano">{mano}</span>
        <div className="grupoContenedores">
          <div className="contenedorFichas">
            <span id="ficha">{fichas}</span>
          </div>
          <span id="LaEquis">X</span>
          <div className="contenedorMulti">
            <span id="multi">{multi}</span>
          </div>
        </div>
      </div>
      <br />
      
      <ContenedorBotonesTag 
        acciones={{ eliminarCartasSeleccionadas: onEliminar, obtenerMejorMano: onEvaluar }} 
      />
    </div>
  );
};

export default Sidebar;