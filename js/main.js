//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#searchButton').addEventListener('click', getMeal)

function getMeal(){
    let meal = document.querySelector('input').value
    clearInterval(intervalID)

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.meals)
      document.querySelector('h2').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
      document.querySelector('h3').innerText = data.meals[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

document.querySelector('#randomizerButton').addEventListener('click', addInterval)

let intervalID

function addInterval(){
  clearInterval(intervalID)
  myCallback()
  intervalID = setInterval(myCallback, 7000)
}

function myCallback() {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.meals)
    document.querySelector('h2').innerText = data.meals[0].strMeal
    document.querySelector('img').src = data.meals[0].strMealThumb
    document.querySelector('h3').innerText = data.meals[0].strInstructions
  })
  .catch(err => {
      console.log(`error ${err}`)
  }); 

}
