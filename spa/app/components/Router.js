import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = location;
  // console.log(hash);
  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
    console.log(api.POST);
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) return false;

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `
            <p class="error">
            No existen resultados de búsqueda para el término
            <mark>${query}</mark>
            </p>
          `;
        } else {
          search.forEach((post) => (html += SearchCard));
        }
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/contacto")) {
    // $main.innerHTML = `<h2>Sección del Contacto</h2>`;
    $main.appendChild(ContactForm());
    ContactForm;
  } else {
    await ajax({
      // url: `${api.POST}${localStorage.setItem("wpPostld")}`,
      url: `${api.POST}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
