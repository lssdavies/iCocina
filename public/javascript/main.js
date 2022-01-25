function recipeLookup(event) {
  event.preventDefault();

  var selectCategory = document.querySelector('select[name="cuisine"]').value;
  var selectDifficulty = document.querySelector('select[name="difficulty"]'
  ).value;
  //var recipeContainer = document.getElementById("recipe-container")

  // attempt
  // if (!selectCategory) {
  //   window.alert('Please select a cuisine type or a category to search for a recipe.');
  // }

  // const route =  "/recipe/" + selectCategory + !selectDifficulty ? '' : "/" + selectDifficulty;

  // console.log(route);

  if (!selectCategory && !selectDifficulty) {
    window.alert('Please select a cuisine type and a difficulty level to search for a recipe.');
  }
  else if (!selectCategory) {
    window.alert('Please select a cuisine type. ');
  }
  else if (!selectDifficulty) {
    window.alert('Please select a difficulty level. ');
  }
  else {
  window.location.href = "/recipe/" + selectCategory + "/" + selectDifficulty;
  };


  // if (!selectDifficulty) {
  //   window.location.href = "/recipe/" + selectCategory + "/";
  // }
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
