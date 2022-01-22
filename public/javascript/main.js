

function recipeLookup(event) {
    event.preventDefault();

    var selectCategory = document.querySelector('select[name="cuisine"]').value
    var selectDifficulty = document.querySelector('select[name="difficulty"]').value

    //console.log(category)
    fetch("/api/recipes/"+selectCategory+"/"+selectDifficulty)
    .then(response => {
        return response.json()
    }).then (data => {
        console.log(data)
    })


}

document.querySelector('#submit-recipe').addEventListener('click', recipeLookup)