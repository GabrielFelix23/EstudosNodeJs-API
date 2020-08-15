const dbConnection = require('../../config/dbConnecton')

module.exports = (app) => {

    const connection = dbConnection()

    app.get("/noticias", (req, res) => {
        connection.query('select * from noticias', function(error,result) {
            res.render("noticias/noticias", {noticias:result})
        })

    })
}    
  