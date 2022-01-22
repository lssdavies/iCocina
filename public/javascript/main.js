

function recipeLookup(event) {
    event.preventDefault();

    var selectCategory = document.querySelector('select[name="cuisine"]').value
    var selectDifficulty = document.querySelector('select[name="difficulty"]').value

    //console.log(category)
    fetch("/api/recipes/"+selectCategory+"/"+selectDifficulty)
    .then(response => response.json()).then(data => {
         // populate view with data
    });
        //return response.json()
    /*}).then (data => {
        //document.location.replace("/api/recipes/"+selectCategory+"/"+selectDifficulty);
        console.log(data)
    })*/




}

document.querySelector('#submit-recipe').addEventListener('click', recipeLookup)