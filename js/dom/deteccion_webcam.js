const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>¡Sucedio el siguente error!:<mark>${err}</mark></p>`
        );
        console.log(`¡Sucedio el siguente error!:${err}`);
      });
  }
}
// *Este ejercicio vimos como activar nuestra camara webcam para poder compartir en la pantalla como un espejo pero tenemos que darle permiso para activar
