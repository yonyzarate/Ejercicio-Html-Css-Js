const d = document,
  $jokeEl = d.getElementById("joke"),
  $jokeBtn = d.getElementById("jokeBtn");

$jokeBtn.addEventListener("click", generateJoke);

// * Usando ASYNC/AWAIT

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  $jokeEl.innerHTML = data.joke;
}
