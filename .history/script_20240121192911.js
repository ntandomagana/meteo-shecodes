
function handleSe


let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;

let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit", handleSearchSubmit);

