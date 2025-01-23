//recuperation des donnes
const container=document.querySelector(".container");

const cartePrincipale=document.getElementById("temperature_principale");
const carteContenu=document.querySelector("#carte-principale .card-body");
// evenement
const search = document.getElementById("search");

search.addEventListener("click", () => {
  const APIkey = "15bd6169f4518f74e064ad787e0c48dc";
  const city = document.querySelector(".ville").value;

  // Vérifie si l'utilisateur n'a pas entré de ville
  if (city === "") return;

  // Crée l'URL pour appeler l'API OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;

  // Effectue la requête fetch pour obtenir les données météo
  fetch(url)
    .then((response) => response.json()) // Convertit la réponse en JSON
    .then((json) => {
      // Sélectionne les éléments HTML à mettre à jour
      const image = document.getElementById("image_principale");
      const temperature = document.getElementById("temperature_principale");
      const description = document.getElementById("description-principale");
      const humidity = document.getElementById("hymidity_principale");
      const wind = document.getElementById("wind_principale");

      // Modifie l'image en fonction du type de météo
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/sun.png"; // Ajoutez ici les chemins des images appropriés
          break;
        case "Rain":
          image.src = "images/rain.png";
          break;
        case "Snow":
          image.src = "images/snow.png";
          break;
        case "Clouds":
          image.src = "images/clouds.png";
          break;
        default:
          image.src = "images/default.png";
      }

      // Met à jour les informations météo dans le HTML
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données météo :", error);
    });
});
