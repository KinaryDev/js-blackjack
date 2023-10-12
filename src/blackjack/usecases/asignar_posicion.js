const posicionDeLaCasa = 0,
  posicionDelJugadorUno = 3,
  posicionDelJugadorDos = 2,
  posicionDelJugadorTres = 1;

/**
 *Esta función asigna la posición de los elementos HTML pertenecientes a cada jugador
 * @param {Number} numeroDeJugadores Recibe número de jugadores totales incluyendo a la casa
 * @returns {Array<Number>} Retorna un arreglo de números indicando la posición de elemento HTML del jugador
 */
export const asignarPosicion = (numeroDeJugadores) => {
  let posicion = [];
  switch (numeroDeJugadores) {
    case 2:
      posicion.push(posicionDelJugadorUno);
      break;
    case 3:
      posicion.push(posicionDelJugadorUno);
      posicion.push(posicionDelJugadorDos);
      break;
    case 4:
      posicion.push(posicionDelJugadorUno);
      posicion.push(posicionDelJugadorDos);
      posicion.push(posicionDelJugadorTres);
      break;
  }
  posicion.push(posicionDeLaCasa);
  return posicion;
};
