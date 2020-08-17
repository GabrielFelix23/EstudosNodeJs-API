const mysql = require("mysql")

const connMySQL = function(){
    console.log("Conexão com bd foi estabelecida")
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'gfsjxhs123',
        database: 'portal_noticias'
    })
}

module.exports = function(app) {
    console.log("O autolocad carregou o módulo de conexão com o banco")
    return connMySQL
}
      