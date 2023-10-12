const jugadorCasa = document.querySelector("#jugador-casa"),
  jugadorUno = document.querySelector("#jugador-uno"),
  jugadorDos = document.querySelector("#jugador-dos"),
  jugadorTres = document.querySelector("#jugador-tres");

/**
 * Esta función muestra todos los elementos HTML 
 * de los jugadores que jugaran durante la partida
 * @param {Number} numeroDeJugadores Numero de jugadores totales incluyendo a la casa
 */
export const mostrarJugadores = (numeroDeJugadores) => {
  mostrarCasa();
  switch (numeroDeJugadores) {
    case 2:
      mostrarJugadorUno();
      break;
    case 3:
      mostrarJugadorUno();
      mostrarJugadorDos();
      break;
    case 4:
      mostrarJugadorUno();
      mostrarJugadorDos();
      mostrarJugadorTres();
      break;
  }
};

/**
 * Esta función muestra los elementos 
 * HTMl pertenecientes a la casa
 */
const mostrarCasa = () => {
  jugadorCasa.hidden = false;
};

/**
 * Esta función muestra los elementos 
 * HTMl pertenecientes al jugador uno
 */
const mostrarJugadorUno = () => {
  jugadorUno.hidden = false;
};

/**
 * Esta función muestra los elementos 
 * HTML pertenecientes al jugador dos
 */
const mostrarJugadorDos = () => {
  jugadorDos.hidden = false;
};

/**
 * Esta función muestra los elementos 
 * HTML pertenecientes al jugador tres
 */
const mostrarJugadorTres = () => {
  jugadorTres.hidden = false;
};

/**
 * Esta función oculta los elementos 
 * HTML pertenecientes a la casa
 */
const ocultarCasa = () => {
  jugadorCasa.hidden = true;
};

/**
 * Esta función oculta los elementos 
 * HTML pertenecientes al jugador uno
 */
const ocultarJugadorUno = () => {
  jugadorUno.hidden = true;
};

/**
 * Esta función oculta los elementos 
 * HTML pertenecientes al jugador dos
 */
const ocultarJugadorDos = () => {
  jugadorDos.hidden = true;
};

/**
 * Esta función oculta los elementos 
 * HTML pertenecientes al jugador tres
 */
const ocultarJugadorTres = () => {
  jugadorTres.hidden = true;
};

/**
 * Esta función oculta todos los elementos 
 * HTML de los jugadores en la partida
 */
export const ocultarJugadores = () => {
  ocultarCasa();
  ocultarJugadorUno();
  ocultarJugadorDos();
  ocultarJugadorTres();
};
