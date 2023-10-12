import {
  crearBaraja,
  mostrarJugadores,
  ocultarJugadores,
  asignarCarta,
  limpiarCartas,
  asignarPosicion,
  calcularPuntos,
  asignarPuntos,
  limpiarPuntos,
  habilitarJugadorUno,
  habilitarJugadorDos,
  habilitarJugadorTres,
  deshabilitarJugadorUno,
  deshabilitarJugadorDos,
  deshabilitarJugadorTres,
  determinarGanador,
  ocultarAlertas,
} from "./usecases";

//Variables

let baraja = [];

const numeroDeCartasIniciales = 2;

let numeroDeJugadores = 0;
let posicionJugadores = 0;
let puntosJugadores = [];

const puntosGanadores = 21;

const btnNuevoJuego = document.querySelector("#nuevo-juego"),
  btnNuevaPartida = document.querySelector("#nueva-partida"),
  btnUnJugador = document.querySelector("#un-jugador"),
  btnDosJugadores = document.querySelector("#dos-jugadores"),
  btnTresJugadores = document.querySelector("#tres-jugadores");

const btnPedirJugadorUno = document.querySelector("#btnPedirJugadorUno"),
  btnLevantarJugadorUno = document.querySelector("#btnLevantarJugadorUno");

const btnPedirJugadorDos = document.querySelector("#btnPedirJugadorDos"),
  btnLevantarJugadorDos = document.querySelector("#btnLevantarJugadorDos");

const btnPedirJugadorTres = document.querySelector("#btnPedirJugadorTres"),
  btnLevantarJugadorTres = document.querySelector("#btnLevantarJugadorTres");

//Funciones

/**
 * Esta es la función principal de
 * btnNuevoJuego
 */
const nuevoJuego = () => {
  baraja = crearBaraja();
  limpiarVariables();
  limpiarPuntos();
  limpiarCartas();
  ocultarJugadores();
  ocultarAlertas();
  btnNuevaPartida.disabled = true;
};

/**
 * Esta es la función principal de
 * btnNuevaPartida
 */
const nuevaPartida = () => {
  ocultarAlertas();
  puntosJugadores = [];
  habilitarPuntos();
  limpiarPuntos();
  limpiarCartas();
  iniciarJuego();
};

/**
 * Esta es la función principal de
 * btnUnJugador
 */
const unJugador = () => {
  btnNuevaPartida.disabled = false;
  numeroDeJugadores = 2;
  mostrarJugadores(numeroDeJugadores);
  posicionJugadores = asignarPosicion(numeroDeJugadores);
  habilitarPuntos();
  iniciarJuego();
};

/**
 * Esta es la función principal de
 * btnDosJugadores
 */
const dosJugadores = () => {
  btnNuevaPartida.disabled = false;
  numeroDeJugadores = 3;
  mostrarJugadores(numeroDeJugadores);
  posicionJugadores = asignarPosicion(numeroDeJugadores);
  habilitarPuntos();
  iniciarJuego();
};

/**
 * Esta es la función principal de
 * btnTresJugadores
 */
const tresJugadores = () => {
  btnNuevaPartida.disabled = false;
  numeroDeJugadores = 4;
  mostrarJugadores(numeroDeJugadores);
  posicionJugadores = asignarPosicion(numeroDeJugadores);
  habilitarPuntos();
  iniciarJuego();
};

/**
 * Esta es la función principal de
 * btnPedirJugadorUno
 */
const pedirJugadorUno = () => {
  const jugador = 0;
  const posicion = posicionJugadores[jugador];
  repartirCarta(posicion, jugador);
  const puntos = puntosJugadores[jugador];
  verificarPuntuacion(puntos, jugador);
};

/**
 * Esta es la función principal de
 * btnLevantarJugadorUno
 */
const levantarJugadorUno = () => {
  deshabilitarJugadorUno();
  siguienteTurno(1);
};

/**
 * Esta es la función principal de
 * btnPedirJugadorDos
 */
const pedirJugadorDos = () => {
  const jugador = 1;
  const posicion = posicionJugadores[jugador];
  repartirCarta(posicion, jugador);
  const puntos = puntosJugadores[jugador];
  verificarPuntuacion(puntos, jugador);
};

/**
 * Esta es la función principal de
 * btnLevantarJugadorDos
 */
const levantarJugadorDos = () => {
  deshabilitarJugadorUno();
  siguienteTurno(2);
};

/**
 * Esta es la función principal de
 * btnPedirJugadorTres
 */
const pedirJugadorTres = () => {
  const jugador = 2;
  const posicion = posicionJugadores[jugador];
  repartirCarta(posicion, jugador);
  const puntos = puntosJugadores[jugador];
  verificarPuntuacion(puntos, jugador);
};

/**
 * Esta es la función principal de
 * btnLevantarJugadorTres
 */
const levantarJugadorTres = () => {
  deshabilitarJugadorUno();
  siguienteTurno(3);
};

const iniciarJuego = () => {
  repartoInicial();
};

const repartoInicial = () => {
  for (let noCarta = 0; noCarta < numeroDeCartasIniciales; noCarta++) {
    for (let jugador = 0; jugador < numeroDeJugadores; jugador++) {
      const posicion = posicionJugadores[jugador];
      repartirCarta(posicion, jugador);
    }
  }

  const puntosJugadorInicial = puntosJugadores[0];

  verificarPuntuacion(puntosJugadorInicial, 0);
};

const repartirCarta = (posicion, turno) => {
  const carta = obtenerCarta(baraja);
  asignarCarta(carta, posicion);

  const puntosJugador = puntosJugadores[turno];
  const puntos = calcularPuntos(carta, puntosJugador);
  puntosJugadores[turno] = puntos;
  asignarPuntos(posicion, puntos);
};

const obtenerCarta = (baraja) => {
  if (baraja.length <= 10) baraja = crearBaraja();
  return baraja.pop();
};

const habilitarPuntos = () => {
  for (let noJugador = 0; noJugador < numeroDeJugadores; noJugador++) {
    puntosJugadores.push(0);
  }
};

const siguienteTurno = (jugadorAnterior) => {
  switch (jugadorAnterior) {
    case 0:
      habilitarJugadorUno();
      break;
    case 1:
      deshabilitarJugadorUno();
      numeroDeJugadores === 3 || numeroDeJugadores === 4
        ? habilitarJugadorDos()
        : turnoCasa();
      break;
    case 2:
      deshabilitarJugadorDos();
      numeroDeJugadores === 4 ? habilitarJugadorTres() : turnoCasa();
      break;
    default:
      deshabilitarJugadorTres();
      turnoCasa();
      break;
  }
};

const turnoCasa = async () => {
  const turno = puntosJugadores.length - 1;
  let puntosComputadora = puntosJugadores[turno];
  const posicion = posicionJugadores[posicionJugadores.length - 1];
  const puntosMinimos = 17;

  for (let i = 0; i < 10; i++) {
    if (
      puntosComputadora >= puntosMinimos &&
      puntosComputadora <= puntosGanadores
    )
      break;
    if (puntosComputadora >= puntosGanadores) break;
    await repartirCarta(posicion, turno);
    puntosComputadora = puntosJugadores[turno];
  }

  determinarGanador(numeroDeJugadores, puntosJugadores);
};

const verificarPuntuacion = (puntos, turno) => {
  if (puntos < puntosGanadores) {
    siguienteTurno(turno);
  } else {
    siguienteTurno(turno + 1);
  }
};

const limpiarVariables = () => {
  numeroDeJugadores = 0;
  posicionJugadores = 0;
  puntosJugadores = [];
};
//Eventos
btnNuevoJuego.addEventListener("click", () => {
  nuevoJuego();
});

btnNuevaPartida.addEventListener("click", () => {
  nuevaPartida();
});

btnUnJugador.addEventListener("click", () => {
  unJugador();
});

btnDosJugadores.addEventListener("click", () => {
  dosJugadores();
});

btnTresJugadores.addEventListener("click", () => {
  tresJugadores();
});

btnPedirJugadorUno.addEventListener("click", () => {
  pedirJugadorUno();
});

btnLevantarJugadorUno.addEventListener("click", () => {
  levantarJugadorUno();
});

btnPedirJugadorDos.addEventListener("click", () => {
  pedirJugadorDos();
});

btnLevantarJugadorDos.addEventListener("click", () => {
  levantarJugadorDos();
});

btnPedirJugadorTres.addEventListener("click", () => {
  pedirJugadorTres();
});

btnLevantarJugadorTres.addEventListener("click", () => {
  levantarJugadorTres();
});
