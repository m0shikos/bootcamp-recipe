const express = require('express')
const request = require('request')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))

// app.get('/recipes/:food', function (req, res) { 
//     res.send("OK")
// })

let dataQuery

app.get('/recipes/:foodQuery', function(req, res) { 
    let foodQuery = req.params.foodQuery
    request(`http://www.recipepuppy.com/api/?q='+ ${foodQuery}` , function (err, res, body) {
        let jsonStuff = JSON.parse(body)
        dataQuery = jsonStuff.results.map(d => { return { 
            title : d.title,
            href: d.href,
            ingredients: d.ingredients.split(','),
            thumbnail: d.thumbnail 
        }})
    })
    res.send(dataQuery)
})

app.get('/sanity', function (req, res) { 
    res.send("OK")
})

app.get('/', function (req, res) { 
    res.send("SERVER IS RUNNING")
})


app.listen(8080, function() {
    console.log(`"My Roster" server RUNNING!`)
})