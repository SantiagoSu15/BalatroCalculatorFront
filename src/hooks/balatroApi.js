const API_URL = import.meta.env.VITE_API_URL

export const evaluarMejorMano = async (cartasJugadas, jokers = [], planetarias = {}) => {
  try {

    //Mapear cartas para mandarlas al back 
    // Estilo -> valor: "X", tipo: "Y" 
    const cartasFormateadas = cartasJugadas.map(carta => convertirCartaABackend(carta));



    const payload = {
      cartas: cartasFormateadas,
      jokers: jokers,
      planetarias: planetarias
    };


    console.log(JSON.stringify(payload, null, 2));

    //Mandar el request al back  
    const response = await fetch(`${API_URL}/evaluar-mano`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Error al evaluar la mano');
    }


    // El response del back 
    const data = await response.json();
    
    return transformarResponse(data);
  } catch (error) {
    console.error('Error en evaluarMejorMano:', error);
    throw error;
  }
};

// Función auxiliar para convertir el formato de carta interno al del backend
const convertirCartaABackend = (carta) => {
  // Necesitas mapear la posición (col, row) a valor y tipo
  // Esto depende de cómo estén organizadas tus cartas
  const valor = obtenerValorDeCarta(carta.col);
  const tipo = obtenerTipoDeCarta(carta.row);
  
  return { valor, tipo };
};

// Mapeo de columna a valor de carta
const obtenerValorDeCarta = (col) => {
  //Un map 
  const valores = {
    0: '2',   
    8.35: '3',
    16.7: '4',
    25.05: '5',
    33.4: '6',
    41.75: '7',
    50.1: '8',
    58.45: '9',
    66.8: '10',
    75.15: 'J',
    83.5: 'Q',  
    91.85: 'K', 
    100.2: 'A'  
  };
  
  // Buscar el valor mAs cercano
  const colRedondeada = Math.round(col * 100) / 100;
  //funciona como un map.get(x) en java, si no lo encuentra tira A
  return valores[colRedondeada] || 'A';
};


// En la imagen las cartas andan por filas ordenadamente, segun su posicion se puede obtener
const obtenerTipoDeCarta = (row) => {
  const tipos = {
    0: 'Corazon',      // Fila 1
    33.5: 'Trebol', // Fila 2
    67: 'Diamante',    // Fila 3
    100.5: 'Pica' // Fila 4
  };
  
  // Buscar el valor más cercano
  const rowRedondeada = Math.round(row * 10) / 10;
  return tipos[rowRedondeada] || 'Pica';
};

//Mapper para transformar el response
const transformarResponse = (Response) => {
    return {
      mano: Response.manoDePoker,        
      fichas: Response.fichas,
      multi: Response.multi,
      puntaje: Response.puntajeFinal,    
      cartasJugadas: Response.cartasJugadas 
    };
  };