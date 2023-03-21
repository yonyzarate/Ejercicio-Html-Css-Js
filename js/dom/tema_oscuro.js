const d = document;
const ls = localStorage;
export default function darkTheme(btn, classDark) {
  const $themebtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  // console.log($selectors);
  let moon = "🌙",
    sun = "☀️";
  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themebtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darckMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themebtn.textContent = sun;
    ls.setItem("theme", "dark");
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // console.log($themebtn.textContent);
      if ($themebtn.textContent === moon) {
        darckMode();
      } else {
        lightMode();
      }
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    // alert("Hola desde la funcion darcktheme");
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme") === "light") lightMode();

    if (ls.getItem("theme") === "dark") darckMode();
  });
}
