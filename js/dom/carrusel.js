const d = document;
export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");

  let i = 0;
  d.addEventListener("click", (e) => {
    // *Evento que para el boton para que vaya hacia atras
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }
    // *Evento que para el boton para que vaya hacia adelante
    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
  });
}
// *En este ejercicio vimos como hacer un carrucel de imagenes totalmente responsive
// *con sus respectivos botones de atras "<" y adelante ">"
