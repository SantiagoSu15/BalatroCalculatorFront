export const generarCoords = () => {
  let coords = [];
  const alto = 33.5;
  const ancho = 8.35;
  let xInicial = 0;
  let yInicial = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      coords.push([xInicial, yInicial]);
      xInicial += ancho;
    }
    xInicial = 0;
    yInicial += alto;
  }
  return coords;
};

export const getFilaYColumna = (i) => {
  let col = 0;
  let fila = 0;

  if (i <= 13) {
    col = i;
    fila = 1;
  } else if (i > 13 && i <= 26) {
    col = i - 13;
    fila = 2;
  } else if (i > 26 && i <= 39) {
    col = i - 26;
    fila = 3;
  } else if (i > 39 && i <= 52) {
    col = i - 39;
    fila = 4;
  }

  return getCartaPosition(col, fila);
};

const getCartaPosition = (col, fila) => {
  const x = (col - 1) * 8.35;
  const y = (fila - 1) * 33.5;
  return [x, y];
};

export const getCartaStyle = (carta) => {
  const fondoX = carta.fondoX ?? -100;
  const fondoY = carta.fondoY ?? 0;
  
  return {
    backgroundPosition: `${fondoX}% ${fondoY}%, ${carta.col}% ${carta.row}%, ${carta.segundoFondoX}% ${carta.segundoFondoY}%`
  };
};

export const calcularColumnas = (total) => {
  return Math.ceil(Math.sqrt(total));
};