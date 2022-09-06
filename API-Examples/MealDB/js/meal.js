const searchFood = () => {
    const searchMealField = document.getElementById('search-item');
    const searchText = (searchMealField.value);
    // clear data
    searchMealField.value = '';

    // 
    const nullSearch = document.getElementById('err');
    if (searchText == '') {
        nullSearch.style.display = 'block';
        nullSearch.style.color = 'red';
    } else {
        nullSearch.style.display = 'none';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // load data
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals));
    }

    // console.log(searchText);
}

const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');

    // clear old search results || both are same 
    // searchResult.innerHTML = '';

    searchResult.textContent = '';
        meals.forEach(meal => {
            const divCol = document.createElement('div');
            divCol.classList.add('col');
            divCol.innerHTML = `
                    <div onclick="loadMealDetails(${meal.idMeal})" class="card shadow p-3 mb-5 bg-white rounded">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        </div>
                    </div>
            `;
            searchResult.appendChild(divCol);
        });
    }

const loadMealDetails = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = (meal) => {
    console.log(meal);
    const displayMealDetailsSection = document.getElementById('display-meal-details');
    const showDetailDiv = document.createElement('div');
    showDetailDiv.innerHTML = `
            <div class="card text-bg-dark shadow p-3 mb-5 bg-white rounded">
                <img src="${meal.strMealThumb}" class="card-img details-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title text-center text-danger pt-5 details-title">${meal.strMeal}</h5>
                    <p class="card-text px-3">${meal.strInstructions}</p>
                </div>
          
            </div>
                <h3 class='pt-3 text-success text-center'> Related Foods...</h3>

        `;

    displayMealDetailsSection.appendChild(showDetailDiv);
}

