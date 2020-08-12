const app = require('./config/server')

const rotaHome = require("./app/routes/home")
rotaHome(app)

const rotaFormInclusaoNoticia = require("./app/routes/formulario_inclusao_noticia")
rotaFormInclusaoNoticia(app)

const rotaNoticias = require("./app/routes/noticias")
rotaNoticias(app)

const porta = 3000
app.listen(porta, () => {
    console.log("Servidor rodando na porta 3000")
})