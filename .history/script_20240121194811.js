
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.query
}


let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;

let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit", handleSearchSubmit);

