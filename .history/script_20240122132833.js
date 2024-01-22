


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

    // Search for the entered city
    searchCity(searchInput.value);
}

function displayTemperature(response) {
    // Extract temp and city from the API response
    let temperature = Math.round(response.data.temperature.current);
    let city = response.data.city;
}

// Add event listener to the form button for form submission
let searchFormElement = document.querySelector("#search-form-button");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");


// formatting time and day

function formatTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = date.getMinutes()
}