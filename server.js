const express = require('express')
const request = require('request')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))



app.get('/', function (req, res) { // Root routh
    res.send("Server is up and running smoothly")
})


app.listen(8080, function() {
    console.log(`"My Roster" server RUNNING!`)
})