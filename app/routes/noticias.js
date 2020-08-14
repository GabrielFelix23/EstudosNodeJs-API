module.exports = (app) => {
    const mysql = require("mysql")

    const connection = mysql.createConnection({
        
    })

    app.get("/noticias", (req, res) => {
        res.render("noticias/noticias")
    })
}    
  