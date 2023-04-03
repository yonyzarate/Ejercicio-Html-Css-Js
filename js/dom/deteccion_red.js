const d = document,
  w = window,
  n = navigator;
export default function networkStatus() {
  const isOnLine = () => {
    const $div = document.createElement("div");
    if (n.onLine) {
      $div.textContent = "Conexión Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }
    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => d.body.removeChild($div), 2000);
  };
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
// * En este ejercicio vimos como funciona la detección de red y mostrar en la pantalla
//* por mensaje si tenemos conexión o no
