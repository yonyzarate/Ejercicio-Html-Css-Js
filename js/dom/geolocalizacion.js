// *Nota: La trinidad de javascrip en los navegadores era el objeto windows el objeto document y el objeto navigator
// *Windows: es el contexto global que controla la ventana de nuestro navegador
// *document: es arbol la estructura HTML que nos permite acceder a los nodos de nuestro documento
// *navigator: nos da información de las características del dispositivo o del usuario que accede a nuestra pagina
const d = document,
  n = navigator;
export default function getGelocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = `<p>Tu posición actual es :</p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(`"error" ${err.code}: ${err.message}`);
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
// * En este ejercicio podemos ver la posicion actual de donde estamos con la geolocalización
