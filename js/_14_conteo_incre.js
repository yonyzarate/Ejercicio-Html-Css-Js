const $counters = document.querySelectorAll(".counter");

$counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    console.log(target);
    console.log(c);

    const increment = target / 200;
    console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
