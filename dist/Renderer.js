// Fill in the functions for your Renderer Class

class Renderer {
    renderRecipes(foodData) {
        console.log(foodData)
        let source = $('#recipe-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({foodData})
        $('#results').append(newHTML);  
    }

}
