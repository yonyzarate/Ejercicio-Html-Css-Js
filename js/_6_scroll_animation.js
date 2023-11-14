const $boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", (e) => {
  checkBoxes();
});

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  $boxes.forEach((box) => {
    const boxtop = box.getBoundingClientRect().top;
    if (boxtop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
checkBoxes();
