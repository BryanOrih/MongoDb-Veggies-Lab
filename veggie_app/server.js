const express = require('express')
const path = require('path')
require("dotenv").config()
const app = express()
const port = 3001
require('./config/database.js')
app.use(express.json())
const {
    createVeggie,
    getVeggie,
    updateVeggie,
    deleteVeggie
} = require('./controllers/veggies.js')


app.use(express.static(path.join(__dirname, '/build')))


app.post('/create_veggie', createVeggie)

app.get('/veggie', getVeggie)

app.put('/update_veggie/:veggieID', updateVeggie)

app.delete('/delete_veggie/:veggieName', deleteVeggie)

app.listen(port, ()=>{
    // console.log("running localhost", port)
})