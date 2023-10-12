const espacioCartas = document.querySelectorAll(".divCartas");

/**
 * Esta funcion crea y asigna la carta obtenida al jugador
 * @param {String} carta Recibe el string de la carta obtenida
 * @param {Number} posicion Recibe la posicion en la que se encuentra elemento HTML correspondiente al jugador
 */
export const asignarCarta = (carta, posicion) => {
  const imgCarta = crearCarta(carta);
  mostrarCarta(imgCarta, posicion);
};

/**
 * Esta función crea un elemento HTMLImage de la carta obtenida
 * @param {String} carta Recibe el string de la carta obtenida
 * @returns {HTMLImageElement} retorna imagen en elemento HTML
 */
const crearCarta = (carta) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  return imgCarta;
};

/**
 * Esta función muestra la carta obtenida en el HTML
 * @param {HTMLImageElement} carta Recibe el elemento HTMLImage
 * @param {Number} posicion Recibe la posicion en la que se encuentra elemento HTML correspondiente al jugador
 */
const mostrarCarta = (carta, posicion) => {
  espacioCartas[posicion].append(carta);
};

export const limpiarCartas = () => {
  espacioCartas.forEach((element) => (element.innerHTML = ""));
};
