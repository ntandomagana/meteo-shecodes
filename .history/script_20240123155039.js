// Define the API key and construct the API URL with a placeholder for the city
function searchCity(city) {
  let apiKey = "92dt3dae2c3c4fo2b0226a2e5f1a0b88";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherInfo);
}

function displayWeatherInfo(response) {
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${response.data.city}`;

  let currentTemp = document.querySelector(".current-temperature-value");
  currentTemp.innerHTML = Math.round(`${response.data.temperature.current}`);
}

function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let apiKey = "524a99a4fcd0df4388dto8e069b84440";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);