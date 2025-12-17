import React from 'react';
import Sidebar from './components/sidebar';
import JokersContainer from './components/contenedorJokers';
import CartasSeleccionadas from './components/cartasSeleccionadas';
import BarajaButton from './components/botonBaraja';
import ModalBaraja from './components/contenedorCartasParaJugar';
import ModalCartaJugada from './components/cartaJugada';
import { useCartasJuego } from './hooks/useCartasJuego';
import { useEstadoJuego } from './hooks/useEstadoJuego';

import './App.css';

const App = () => {
  // hook para el manejo de cartas
  const {
    cartas,
    cartaSeleccionada,
    cartasJugadas,
    mostrarBaraja,
    mostrarCartaJugada,
    mostrarOpciones,
    opcionesSecundarias,
    mostrarCartaSeleccion,
    openCards,
    ponerElementos,
    ponerCartaEnElSeleccionador,
    seleccionarCartaSeleccion,
    eliminarCartasSeleccionadas,
    sacarCartaJugada,
    botonAtras
  } = useCartasJuego();

  // hook para el estado del juego
  const {
    jokersSeleccionados,
    puntaje,
    fichas,
    multi,
    mano,
    cargando,
    obtenerMejorMano,
    eliminarJokers
  } = useEstadoJuego();

  const eliminarCartas = () => {
    eliminarCartasSeleccionadas();
    eliminarJokers();
  };

  const evaularMano = () => {
    obtenerMejorMano(cartasJugadas);
  };

  return (
    <div>
      <h1>Partida</h1>
      
      <Sidebar
        puntaje={puntaje}
        fichas={fichas}
        multi={multi}
        mano={mano}
        acciones={{
          onEliminar: eliminarCartas,
          onEvaluar: evaularMano
        }}
      />

      <JokersContainer jokers={jokersSeleccionados} />

      <div className="contenedorBottom">
        <CartasSeleccionadas cartas={cartasJugadas} />
        <BarajaButton onClick={openCards} />
      </div>

      {mostrarBaraja && (
        <ModalBaraja
          cartas={cartas}
          onSelectCarta={(id) => {
            mostrarCartaSeleccion(id);
          }}
        />
      )}

      {mostrarCartaJugada && cartaSeleccionada && (
        <ModalCartaJugada
          carta={cartaSeleccionada}
          mostrarOpciones={mostrarOpciones}
          opcionesSecundarias={opcionesSecundarias}
          onPonerElementos={ponerElementos}
          onSeleccionarOpcion={ponerCartaEnElSeleccionador}
          onConfirmar={seleccionarCartaSeleccion}
          onCerrar={sacarCartaJugada}
          onAtras={botonAtras}
        />
      )}

      {cargando && (
        <div className="loading-overlay">Evaluando mano...</div>
      )}
    </div>
  );
};

export default App;