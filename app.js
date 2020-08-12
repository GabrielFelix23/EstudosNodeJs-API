const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Olá mundo!")
})

const porta = 3000
app.listen(porta, () => {
    console.log("Servidor rodando na porta 3000")
})