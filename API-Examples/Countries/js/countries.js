function loadCountries() {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => displayCountries(countries))
}

function displayCountries(countries) {
  console.log(countries);
  const countriesContainer = document.getElementById('countries-container');
  for (const country of countries) {
    const countryName = country.name.common;
    const capital = (country.capital).toString();
    const continents = country.continents.toString();
    const flags = country.flags.png;
    const googleMap = country.maps.googleMaps;

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card m-2" style="width: 18rem;">
        <img src="${flags}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name: ${countryName}</h5>
          <p class="card-text">Capital: ${capital}</p>
          <p class="card-text">Continent: ${continents}</p>
          <a target="_blank" href="${googleMap}" class="btn btn-primary">Go to Google-map</a>
        </div>
      </div>
      `;

    countriesContainer.appendChild(div);
  }
}