

// const getFood = function() {
//     let foodValue = $("#recipe-input").val()
//     console.log(foodValue)

//     //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
  
//   //log the data
//   console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })

// }

let renderer = new Renderer()

const getFoodValue = function () {
    let input = $("#recipe-input").val()

    $.get(`recipes/${input}`, function (foodData) {
        renderer.renderRecipes(foodData)
        // $("body").append(`<div>${foodData.title} - ${foodData.ingredients}`)
    })
}

