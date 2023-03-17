const d = document,
  W = window;
export default function scrollTopBottom(btn) {
  const $scrollBtn = d.querySelector(btn);

  W.addEventListener("scroll", (e) => {
    let scrolltop = W.pageYOffset || d.documentElement.scrollTop;
    if (scrolltop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    console.log(W.pageYOffset, d.documentElement.scrollTop);
  });
  d.addEventListener("click", (e) => {
    // console.log(e.target.matches(btn));
    if (e.target.matches(btn)) {
      W.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
