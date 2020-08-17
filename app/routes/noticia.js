module.exports = (app) => {
    
    app.get("/noticia", (req, res) => {

        const connection = app.config.dbConnecton()
        const noticiasModel = app.app.models.noticiasModel

        noticiasModel.getNoticia(connection, function(error, result){
            res.render("noticias/noticia", {noticia:result})
        })
    })
    
}    
  