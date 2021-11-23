import fetch from "node-fetch";

const API = "https://rickandmortyapi.com/api/character/";

const fetchData = (urlApi) => {
  fetch(urlApi)
    .then(response => response.json())
    .then(data => {
      console.log(`Personajes: ${data.info.count}`);
      return fetch(`${API}${data.results[0].id}`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Primer Personaje: ${data.name}`);
      return fetch(data.origin.url);
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Dimensión: ${data.dimension}`);
    })
    .catch(error => {
      console.error(`Error ${error}`);
    })
};

fetchData(API);
