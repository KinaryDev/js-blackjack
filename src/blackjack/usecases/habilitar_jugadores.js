export const habilitarJugadorUno = () => {
  btnPedirJugadorUno.disabled = false;
  btnLevantarJugadorUno.disabled = false;
};

export const habilitarJugadorDos = () => {
  btnPedirJugadorDos.disabled = false;
  btnLevantarJugadorDos.disabled = false;
};

export const habilitarJugadorTres = () => {
  btnPedirJugadorTres.disabled = false;
  btnLevantarJugadorTres.disabled = false;
};

export const deshabilitarJugadorUno = () => {
  btnPedirJugadorUno.disabled = true;
  btnLevantarJugadorUno.disabled = true;
};

export const deshabilitarJugadorDos = () => {
  btnPedirJugadorDos.disabled = true;
  btnLevantarJugadorDos.disabled = true;
};

export const deshabilitarJugadorTres = () => {
  btnPedirJugadorTres.disabled = true;
  btnLevantarJugadorTres.disabled = true;
};

export const deshabilitarJugadores = () => {
  deshabilitarJugadorUno();
  deshabilitarJugadorDos();
  deshabilitarJugadorTres();
};
