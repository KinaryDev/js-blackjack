const alertJugadorUno = document.querySelector("#alerta-jugador-uno"),
  alertJugadorDos = document.querySelector("#alerta-jugador-dos"),
  alertJugadorTres = document.querySelector("#alerta-jugador-tres"),
  alertCasa = document.querySelector("#alerta-casa");

export const determinarGanador = (numeroDeJugadores, puntosJugadores) => {
  setTimeout(() => {
    if (numeroDeJugadores === 2) {
      const [jugador, casa] = puntosJugadores;
      ganadorPorJugador(jugador, casa, 1);
    } else if (numeroDeJugadores === 3) {
      const [jugadorUno, jugadorDos, casa] = puntosJugadores;
      ganadorPorJugador(jugadorUno, casa, 1);
      ganadorPorJugador(jugadorDos, casa, 2);
    } else if (numeroDeJugadores === 4) {
      const [jugadorUno, jugadorDos, jugadorTres, casa] = puntosJugadores;
      ganadorPorJugador(jugadorUno, casa, 1);
      ganadorPorJugador(jugadorDos, casa, 2);
      ganadorPorJugador(jugadorTres, casa, 3);
    }
  }, 150);
};

const ganadorPorJugador = (jugador, casa, numeroJugador) => {
  let mensaje = "";
  let isJugadorGana = false;

  if (casa > 21 && jugador <= 21) {
    mensaje = `Jugador ${numeroJugador} le gana a la casa`;
    isJugadorGana = true;
  } else if (casa < jugador && jugador <= 21) {
    mensaje = `Jugador ${numeroJugador} le gana a la casa`;
    isJugadorGana = true;
  } else if (casa > 21 && jugador > 21) mensaje = "Nadie gana";
  else if (casa === jugador)
    mensaje = `Empate entre el jugador ${numeroJugador} y la casa`;
  else mensaje = `La casa le gana al jugador ${numeroJugador}`;

  const clase = isJugadorGana ? "bg-success" : "bg-danger";

  mensajeAlerta(numeroJugador, clase, mensaje);
  //   alertaCasa(clase, mensaje);
};

const mensajeAlerta = (numeroJugador, clase, mensaje) => {
  if (numeroJugador === 1) {
    alertJugadorUno.hidden = false;
    alertJugadorUno.classList.add(clase);
    alertJugadorUno.innerText = mensaje;
  } else if (numeroJugador === 2) {
    alertJugadorDos.innerText = mensaje;
    alertJugadorDos.hidden = false;
    alertJugadorDos.classList.add(clase);
  } else if (numeroJugador === 3) {
    alertJugadorTres.innerText = mensaje;
    alertJugadorTres.hidden = false;
    alertJugadorTres.classList.add(clase);
  }
};

export const ocultarAlertas = () => {
  alertJugadorUno.hidden = true;
  alertJugadorDos.hidden = true;
  alertJugadorTres.hidden = true;
  eliminarClases();
};

export const eliminarClases = () => {
  alertJugadorUno.classList.remove("bg-success");
  alertJugadorDos.classList.remove("bg-success");
  alertJugadorTres.classList.remove("bg-success");
  alertJugadorUno.classList.remove("bg-danger");
  alertJugadorDos.classList.remove("bg-danger");
  alertJugadorTres.classList.remove("bg-danger");
};
