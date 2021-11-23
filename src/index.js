const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";
const xhttp = new XMLHttpRequest();

const parseDataToJSON = (data) => JSON.parse(data);

const fetchData = (urlApi, callback) => {
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, xhttp.responseText);
      } else {
        return callback(urlApi);
      }
    }
  };
  xhttp.open("GET", urlApi, false);
  xhttp.send();
};

fetchData(API, (error1, data1) => {
  if (error1) {
    return console.error(`Error ${error1}`);
  }
  console.log("Primer Llamado...");
  const parsedData1 = parseDataToJSON(data1);
  fetchData(`${API}${parsedData1.results[0].id}`, (error2, data2) => {
    if (error2) {
      return console.error(`Error ${error2}`);
    }
    console.log("Segundo Llamado...");
    const parsedData2 = parseDataToJSON(data2);
    fetchData(parsedData2.origin.url, (error3, data3) => {
      if (error3) {
        return console.error(`Error ${error3}`);
      }
      console.log("Tercer Llamado...");
      const parsedData3 = parseDataToJSON(data3);
      console.log(`Personajes: ${parsedData1.info.count}`);
      console.log(`Primer Personaje: ${parsedData2.name}`);
      console.log(`Dimensión: ${parsedData3.dimension}`);
    });
  });
});
