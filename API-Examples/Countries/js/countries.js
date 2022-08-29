function loadCountries() {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => displayCountries(countries))
}

function displayCountries(countries) {

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
          <div class='d-flex justify-content-evenly align-items-center'>
          <a target="_blank" href="${googleMap}" class="btn btn-primary">Go to Google-map</a>
          <button class='btn btn-success' onclick="loadCountryDetails('${countryName}')"> Details </button>
          </div>
        </div>
      </div>
      `;
 
    countriesContainer.appendChild(div);
  }
}

loadCountries();

// 
function loadCountryDetails(name) {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
  // console.log(url);
}

const displayCountryDetail = country => {
  const flags = country.flags.png;
  const countryDiv = document.getElementById('country-detail');
  countryDiv.innerHTML = `
  <h5>${country.name.common}</h5>
  <p>${country.population}</p> 
  <img width='200px' src="${flags}" alt="">
  `;
  console.log(country.name.common);
}