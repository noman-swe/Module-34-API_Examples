function loadUSPolulations() {
    const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPopulations(data.data))
}

const displayPopulations = datas => {
    const displayPopulationContainer = document.getElementById('display-populations');

    datas.forEach(data => {
        console.log(data);
        const displayPopulationDiv = document.createElement('div');
        displayPopulationDiv.classList.add('card');
        displayPopulationDiv.innerHTML = `   
    <div class="card-body">
        <h5 class="card-title">Nation : ${data.Nation}</h5>
        <p class="card-text">Populations : ${data.Population}</p>
        <p class="card-text">Year :${data.Year}</p>

    </div>
    `;
        displayPopulationContainer.appendChild(displayPopulationDiv);
    });
}

// 

function loadJokes() {
    const url = `https://official-joke-api.appspot.com/random_joke`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayJokes(data));
}
const displayJokes = data => {
    const displayJokesContainer = document.getElementById('display-quote');
    const displayJokesDiv = document.createElement('div');
    displayJokesDiv.classList.add('card');
    displayJokesDiv.innerHTML = `
    <div class="card-header text-center">
        Quote
    </div>
    <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${data.setup}</p>
            <footer class="blockquote-footer">${data.punchline}</footer>
        </blockquote>
    </div>
`;
displayJokesContainer.appendChild(displayJokesDiv);
}

// 

const loadUniversities = () => {
    const url = `http://universities.hipolabs.com/search?country=United+States`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayVercities(data))
}

function displayVercities(data) {
    console.log(data);
}

loadUniversities();