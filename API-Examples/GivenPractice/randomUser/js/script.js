function loadSports() {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    console.log(searchValue);

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchteams.php?t=Arsenal`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

        // console.log(url);

        searchField.value = '';
}