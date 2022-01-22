function recipeLookup(event) {
  event.preventDefault();

  var selectCategory = document.querySelector('select[name="cuisine"]').value;
  var selectDifficulty = document.querySelector(
    'select[name="difficulty"]'
  ).value;
  //var recipeContainer = document.getElementById("recipe-container")

  window.location.href = "/recipe/" + selectCategory + "/" + selectDifficulty;

  //console.log(category)
  //fetch("/api/recipes/"+selectCategory+"/"+selectDifficulty)
  //.then(response => response.json()).then(data => {
  // populate view with data

  //});
  //return response.json()
  /*}).then (data => {
  var selectCategory = document.querySelector('select[name="cuisine"]').value;
  var selectDifficulty = document.querySelector(
    'select[name="difficulty"]'
  ).value;


  //   fetch("/recipe/" + selectCategory + "/" + selectDifficulty);
  //return response.json()
  /*}).then (data => {
        //document.location.replace("/api/recipes/"+selectCategory+"/"+selectDifficulty);
        console.log(data)
    })*/
}

document.querySelector(".searchField").addEventListener("submit", recipeLookup);
