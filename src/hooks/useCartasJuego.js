import { useState, useEffect } from 'react';
import { generarCoords, getFilaYColumna } from './cartasUtils';

export const useCartasJuego = () => {
  const [cartas, setCartas] = useState([]);
  const [cartaSeleccionada, setCartaSeleccionada] = useState(null);
  const [cartasJugadas, setCartasJugadas] = useState([]);
  const [mostrarBaraja, setMostrarBaraja] = useState(false);
  const [mostrarCartaJugada, setMostrarCartaJugada] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(true);
  const [opcionesSecundarias, setOpcionesSecundarias] = useState([]);

  useEffect(() => {
    const coords = generarCoords();
    const nuevasCartas = coords.map((coord, index) => ({
      id: index + 1,
      x: coord[0],
      y: coord[1]
    }));
    setCartas(nuevasCartas);
  }, []);

  const mostrarCartaSeleccion = (numero) => {
    const [col, row] = getFilaYColumna(numero);
    const carta = {
      fondoX: null,
      fondoY: null,
      col,
      row,
      segundoFondoX: 16.7,
      segundoFondoY: 0
    };
    
    setCartaSeleccionada(carta);
    setMostrarCartaJugada(true);
    setMostrarOpciones(true);
    setOpcionesSecundarias([]);
  };

  const openCards = () => {
    setMostrarBaraja(!mostrarBaraja);
    if (mostrarBaraja) {
      setMostrarCartaJugada(false);
    }
  };

  const creacionParaTiposCarta = (primerX, primerY, segundoX, segundoY) => {
    if (!cartaSeleccionada) return;

    const nuevaOpcion = {
      fondoX: primerX ?? -100,
      fondoY: primerY ?? 0,
      col: cartaSeleccionada.col,
      row: cartaSeleccionada.row,
      segundoFondoX: segundoX ?? 16.7,
      segundoFondoY: segundoY ?? 0
    };

    setOpcionesSecundarias(prev => [...prev, nuevaOpcion]);
  };

  const ponerElementos = (tipo) => {
    if (!cartaSeleccionada) return;

    const { segundoFondoX, segundoFondoY } = cartaSeleccionada;
    setMostrarOpciones(false);
    setOpcionesSecundarias([]);

    if (tipo === 'sello') {
      creacionParaTiposCarta(33.4, 0, segundoFondoX, segundoFondoY);
      creacionParaTiposCarta(66.8, 100, segundoFondoX, segundoFondoY);
      creacionParaTiposCarta(83.5, 100, segundoFondoX, segundoFondoY);
      creacionParaTiposCarta(100.2, 100, segundoFondoX, segundoFondoY);
    } else if (tipo === 'encantamiento') {
      creacionParaTiposCarta(null, null, 83.5, 0);
      creacionParaTiposCarta(null, null, 100.1, 0);
      for (let i = 0; i < 6; i++) {
        creacionParaTiposCarta(null, null, 16.7 * (i + 1), 25);
      }
    }
  };

  const ponerCartaEnElSeleccionador = (carta) => {
    setCartaSeleccionada(carta);
  };

  const seleccionarCartaSeleccion = () => {
    if (cartaSeleccionada) {
      setCartasJugadas(prev => [...prev, cartaSeleccionada]);
      setMostrarCartaJugada(false);
      setCartaSeleccionada(null);
    }
  };

  const eliminarCartasSeleccionadas = () => {
    setCartasJugadas([]);
  };

  const sacarCartaJugada = () => {
    setMostrarCartaJugada(false);
    setCartaSeleccionada(null);
  };

  const botonAtras = () => {
    if (!mostrarOpciones) {
      setMostrarOpciones(true);
      setOpcionesSecundarias([]);
    } else {
      setMostrarCartaJugada(false);
      setCartaSeleccionada(null);
    }
  };

  return {
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
  };
};