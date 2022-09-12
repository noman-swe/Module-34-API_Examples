function loadSports() {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    console.log(searchValue);

    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLeagues(data.sports))

    searchField.value = '';
}

const displayLeagues = sports => {
    console.log(sports);
    // console.log(leagues.strLeague);
    const displayLeagueField = document.getElementById('display-leagues');

    sports.forEach(sport => {
        console.log(sport);
        const displayLeagueDiv = document.createElement('div');
        displayLeagueDiv.classList.add('col');
        displayLeagueDiv.innerHTML = `
            <div onclick="${loadAllLeagues(sport.idLeague)}" class="card">
                
                <div class="card-body">
                    <h5 class="card-title">${sport.strSport}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                </div>
          </div>
        `;
        displayLeagueField.appendChild(displayLeagueDiv);
    });

}

// // 
// const loadAllLeagues = leagueId => {
//     // console.log(leagueId);
//     const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_seasons.php?id=${leagueId}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

loadSports();