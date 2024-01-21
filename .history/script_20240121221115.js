
// Define the API key and construct the API URL with a placeholder for the city

function searchCity(city) {
    let apiKey = "92dt3dae2c3c4fo2b0226a2e5f1a0b88";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
}

// Function to handle form submission and update the displayed city
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;

    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form-button");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");