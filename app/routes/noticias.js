module.exports = (app) => {
    
    app.get("/noticias", (req, res) => {

        const connection = app.config.dbConnecton()

        connection.query('select * from noticias', function(error,result) {
            res.render("noticias/noticias", {noticias:result})
        })
    })
    
}    
  