import { useState } from 'react';
import { evaluarMejorMano } from './balatroApi';

export const useEstadoJuego = () => {
  const [jokersSeleccionados, setJokersSeleccionados] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const [fichas, setFichas] = useState(0);
  const [multi, setMulti] = useState(0);
  const [mano, setMano] = useState('-');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const obtenerMejorMano = async (cartasJugadas) => {
    if (cartasJugadas.length === 0) {
      alert('Debes seleccionar al menos una carta');
      return;
    }

    setCargando(true);
    setError(null);
    
    try {
        // se manda lo necesaroi a evualuar mano funcion q esta en balatroApi.js ahi se transforma la info para volverla un request 
      const resultado = await evaluarMejorMano(cartasJugadas, jokersSeleccionados);
      

      //Acutalizar en vivo los resultados del response
      setPuntaje(resultado.puntaje);      // viene de "puntajeFinal"
      setMano(resultado.mano);            // viene de "manoDePoker"
      setFichas(resultado.fichas);
      setMulti(resultado.multi);
      
      console.log('Resultado evaluación:', resultado);
    } catch (error) {
      console.error('Error al evaluar la mano:', error);
      setError('Error al evaluar la mano. Intenta de nuevo.');
      alert('Error al evaluar la mano. Intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  const eliminarJokers = () => {
    setJokersSeleccionados([]);
  };

  const resetearEstado = () => {
    setPuntaje(0);
    setFichas(0);
    setMulti(0);
    setMano('-');
  };

  return {
    jokersSeleccionados,
    puntaje,
    fichas,
    multi,
    mano,
    cargando,
    error,
    obtenerMejorMano,
    eliminarJokers,
    resetearEstado
  };
};