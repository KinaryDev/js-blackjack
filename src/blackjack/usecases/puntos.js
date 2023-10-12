const puntosJugadores = document.querySelectorAll("span");

/**
 * Esta función calcula los puntos obtenidos de cada jugador
 * @param {String} carta Recibe la carta obtenida
 * @param {Number} puntos Recibe los puntos del jugador en turno
 * @returns
 */
export const calcularPuntos = (carta, puntos) => {
  return (puntos += valorCarta(carta));
};

/**
 * Esta función obtiene el valor de cada carta
 * @param {String} carta Recibe la carta obtenida
 * @returns {Number} Retorna el valor de la carta
 */
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  if (isNaN(valor)) return valor === "A" ? 11 : 10;
  else return parseInt(valor);
};

export const asignarPuntos = (posicion, puntos) => {
  puntosJugadores[posicion].innerText = puntos;
};

export const limpiarPuntos = () => {
  puntosJugadores.forEach((element) => (element.innerText = 0));
};
