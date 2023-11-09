const $nums = document.querySelectorAll(".nums span"),
  $counter = document.querySelector(".counter"),
  $finalMessage = document.querySelector(".final"),
  $replay = document.querySelector("#replay");

// console.log($nums);
const resetDOM = () => {
  $counter.classList.remove("hide");
  $finalMessage.classList.remove("show");

  $nums.forEach((num) => {
    num.classList.value = "";
  });
  $nums[0].classList.add("in");
};
const runAnimation = () => {
  $nums.forEach((num, idx) => {
    const nexToLast = $nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nexToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        $counter.classList.add("hide");
        $finalMessage.classList.add("show");
      }
    });
  });
};
$replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
runAnimation();
