(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log("éxito");

      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email}-- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      // console.log("error");
      let message = xhr.statusText || "Ocurrío un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
    // console.log(xhr);
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
// alert("hola mundo");
// *En este capitulo vimos Ajax objeto XMLHttpRequest como funciona utilizando un api
// *(jsonpleceholder.typicode.com) que es una api para practicar

// *API Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   console.log(res);
    //   return res.json();
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email}-- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err);
      let message = err.statusText || "Ocurrío un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      // console.log(
      //   "Esto se ejecutará indepentientemente del resultado de la Pronesa Fetch"
      // );
    });
})();
// *************AJAX: API Fetch + Async-Await

(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/user"),
        json = await res.json();

      // console.log(res, json);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email}-- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      // console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      // console.log("Esto se ejecutará indepentientemente del try... catch");
    }
  }
  getData();
})();
// import axios from "axios";
// *********** AJAX Libreria Axios
// (() => {
//   const $axios = document.getElementById("axios"),
//     $fragment = document.createDocumentFragment();

//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       console.log(res);
//       let json = res.data;

//       json.forEach((el) => {
//         const $li = document.createElement("li");
//         $li.innerHTML = `${el.name} -- ${el.email}-- ${el.phone}`;
//         $fragment.appendChild($li);
//       });
//       $axios.appendChild($fragment);
//     })
//     .catch((err) => {
//       console.log("Estamos en el catch", err);
//     })
//     .finally(() => {
//       console.log("Esto se ejecutará independientemente del resultado Axios");
//     });
// })();
