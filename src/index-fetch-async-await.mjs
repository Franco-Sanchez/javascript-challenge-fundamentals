import fetch from "node-fetch";

const API = "https://rickandmortyapi.com/api/character/";

const fetchData = async (urlApi) => {
  try {
    const response1 = await fetch(urlApi);
    const data1 = await response1.json();
    const response2 = await fetch(`${API}${data1.results[0].id}`);
    const data2 = await response2.json();
    const response3 = await fetch(data2.origin.url);
    const data3 = await response3.json();
    console.log(`Personajes: ${data1.info.count}`);
    console.log(`Primer Personaje: ${data2.name}`);
    console.log(`Dimensión: ${data3.dimension}`);
  } catch (error) {
    console.error(`Error ${error}`);
  }
};

fetchData(API);
