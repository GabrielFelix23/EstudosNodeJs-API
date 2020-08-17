module.exports = (app) => {
    
    app.get("/noticias", (req, res) => {

        const connection = app.config.dbConnecton()
        const noticiasModel = app.app.models.noticiasModel

        noticiasModel.getNoticias(connection, function(error,result) {
            res.render("noticias/noticias", {noticias:result})
        })
    })
    
}    
  