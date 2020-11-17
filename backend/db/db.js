const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({

host:'b9bezzo3cueq9ynuuzqs-mysql.services.clever-cloud.com',

user: 'uwyw4tjgriglqssg',
//password: '123', //yN0iZPsed0lzErrcxde7
password: '9UngOHjJOgqz8MNYJhL8',
//database: 'lab_mediatecnica', //bnuhluvomjfkpoulcnxc
database: 'b9bezzo3cueq9ynuuzqs',

multipleStatements:true

});
//Establecer la conexión a la bd
mysqlConnection.connect(function(err){
if(err){
    console.log(err);
    return;
}else{
    console.log('Base de datos conectado');
}// fin si
})// fin connect

// al final de las funciones , callbacks, middleware
module.exports =mysqlConnection;