import scrollTopBottom from "./dom/boton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import userDiviceInfo from "./dom/detecion_dispositivos.js";
import searchFilters from "./dom/filtro_busquedas.js";
import getGelocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_reponsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarm.wav", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Mar 08, 2023 11:04:00", "Feliz cumpleaños");
  scrollTopBottom(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/4k2aQJFkvKvYrZbN8" target="_blank">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4515.791527471732!2d-63.141268423940716!3d-17.870816419572265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDUyJzE3LjMiUyA2M8KwMDgnMjQuNCJX!5e0!3m2!1ses-419!2sbo!4v1679605946124!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDiviceInfo("user-device");
  webCam("webcam");
  getGelocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
