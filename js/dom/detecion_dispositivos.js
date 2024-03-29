const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDiviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/Android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      window: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.window();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };
  // console.log(ua);
  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isMobile.any());
  // console.log(isDesktop.any());
  // console.log(isBrowser.any());
  $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
  `;

  // *Contenifodo Exclusivo
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en firefox</mark></p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para linux</mark></p>`;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para MAC</mark></p>`;
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para windows</mark></p>`;
  }
  // *Redirecciones
  if (isMobile.android()) {
    // window.location.href = "https://jonmircha.com";
  }
}

// *En este ejercicio podemos ver como podemos crear contenido exclusivo para diferentes pataformas, navedores o sistema operativo
