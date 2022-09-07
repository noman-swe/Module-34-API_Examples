const searchFood = () => {
    const searchInputField = document.getElementById('search-field');
    const searchValue = searchInputField.value;
    // error - null search
    const nullSearchErr = document.getElementById('nullSearchErr');
    if (searchValue == '') {
        nullSearchErr.style.display = 'block';
        document.getElementById('noResustsErr').style.display = 'none';

    } else {
        nullSearchErr.style.display = 'none';
        document.getElementById('noResustsErr').style.display = 'none';

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))
            .catch(error => displayError(error));
    }

    searchInputField.value = '';
}

// error - source or url or api connention error
const displayError = error => {
    const nullSearchErr = document.getElementById('noResustsErr').style.display = 'block';
    document.getElementById('nullSearchErr').style.display = 'none';
}


// display Meals
const displayMeals = (meals) => {
    // console.log(meals);

    // creating html to show datas
    const displayMealContainer = document.getElementById('display-meals');
    // array break in object
    meals.forEach(meal => {
        // console.log(meal);

        const displayCardsDiv = document.createElement('div');
        displayCardsDiv.classList.add('col');
        displayCardsDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        `;
        displayMealContainer.appendChild(displayCardsDiv);
    });
}

// load meal details
const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
}


// displayMealDetails
const displayMealDetails = meal => {
    console.log(meal);
    const displayMealDetailsContainer = document.getElementById('display-meal-details');
    displayMealDetailsContainer.textContent = '';
    const displaydetailsDiv = document.createElement('div');

    displaydetailsDiv.innerHTML = `
    <div class="card mb-3">
  <img  src="${meal.strMealThumb}" class="display-img card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
    `;
    displayMealDetailsContainer.appendChild(displaydetailsDiv);
}