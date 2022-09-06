const getMeals = () => {
    const searchInputField = document.getElementById('search-input');
    const searchText = searchInputField.value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))

    searchInputField.value = '';
}

const displayMeals = (meals) => {
    const cardContainer = document.getElementById('card-container');
    meals.forEach(meal => {
        // clear the old search history
        cardContainer.textContent = '';
        // console.log(meal);
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        colDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        cardContainer.appendChild(colDiv);
    });
}

function loadMealDetails(mealId) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = (meal) => {
    console.log(meal);
    const displayDetailsField = document.getElementById('display-details-section');
    const displayDetailsDiv = document.createElement('div');
    displayDetailsDiv.classList.add('card');
    displayDetailsDiv.innerHTML = `
        <div class="card-header">
            <img src="${meal.strMealThumb}" class="img-fluid" alt="">
        </div>
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
            <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">youtube link</a>
        </div>
    `;
    displayDetailsField.appendChild(displayDetailsDiv);
}