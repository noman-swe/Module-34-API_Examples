const searchFood = () => {
    const searchMealField = document.getElementById('search-item');
    const searchText = (searchMealField.value);
    // console.log(searchText);
    searchMealField.value = '';
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
    
}