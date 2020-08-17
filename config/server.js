const express = require("express")
const app = express()
const consign = require("consign")

app.set('view engine', 'ejs')
app.set('views', './app/views')

consign()
    .include('app/routes')
    .then('config/dbConnecton.js')
    .into(app)

module.exports = app