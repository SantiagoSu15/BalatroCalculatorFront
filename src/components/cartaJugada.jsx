import React from 'react';
import CartaDisplay from './cartaJugada/cartaDisplay';
import BotonesOpcionesCarta from './cartaJugada/botonesOpcionesCarta';
import BotonesAccion from './cartaJugada/botonesAccion';
import OpcionesSecundarias from './cartaJugada/opcionesSecundarias';

const ModalCartaJugada = ({
  carta,
  mostrarOpciones,
  opcionesSecundarias,
  onPonerElementos,
  onSeleccionarOpcion,
  onConfirmar,
  onCerrar,
  onAtras
}) => {
  return (
    <div className="cartaJugada" id="cartaJugada" style={{ display: 'block' }}>
      <CartaDisplay carta={carta} />

      <BotonesOpcionesCarta 
        onPonerElementos={onPonerElementos}
        mostrar={mostrarOpciones}
      />

      <BotonesAccion 
        onAtras={onAtras}
        onConfirmar={onConfirmar}
        onCerrar={onCerrar}
      />

      <OpcionesSecundarias 
        opciones={opcionesSecundarias}
        onSeleccionarOpcion={onSeleccionarOpcion}
      />
    </div>
  );
};

export default ModalCartaJugada;
