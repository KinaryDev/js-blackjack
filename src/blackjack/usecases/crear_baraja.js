import { shuffle } from "underscore";

const tiposDeCartas = ["C", "D", "H", "S"],
  cartasEspeciales = ["A", "J", "Q", "K"];

/**
 * Esta función crea un arreglo de cartas
 * @returns {Array<String>} Arreglo de cartas a usar durante la partida
 */
export const crearBaraja = () => {
  let baraja = [];

  for (let tipo of tiposDeCartas) {
    for (let i = 2; i <= 10; i++) {
      baraja.push(i + tipo);
    }

    for (let especial of cartasEspeciales) {
      baraja.push(especial + tipo);
    }
  }

  return shuffle(baraja);
};
