const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_crud'
});

connection.connect((err) =>{
    if(err){
        console.error('A tentativa de conectar ao banco dedados falhou!', err);
    }else{
        console.log('Conectado ao banco de dados MySql com êxito!');
    }
});

module.exports = connection;