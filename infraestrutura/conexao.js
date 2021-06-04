const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '080398',
    database: 'agenda-petshop'
})

module.exports = conexao