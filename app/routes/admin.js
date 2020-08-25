module.exports = (aplication) => {
    aplication.get("/formulario_inclusao_noticia", (req, res) => {
        res.render("admin/form_add_noticia")
    })

    aplication.post("/noticias/salvar", (req, res) => {
        var noticia = req.body;
    
        const connection = aplication.config.dbConnecton()
        const noticiasModel = aplication.app.models.noticiasModel

        noticiasModel.salvarNoticia(noticia, connection, function(error,result) {
            res.redirect("/noticias")
        })
    })
}    
   