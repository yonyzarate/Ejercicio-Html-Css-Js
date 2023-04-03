const d = document;
export default function searchFilters(input, selector) {
  // const $input = d.querySelector(input);
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      // console.log(e.key);
      console.log(e.target.value);
      if (e.key === "Escape") e.target.value = "";
      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
// *En este ejercicio vemos como podemos hacer una busqueda filtrada de las descripción de la imagen con el evento keyup
