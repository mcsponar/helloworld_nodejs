var mysql = require('mysql');
var db = require('./db');

var host = "localhost";
var db_user = "demo";
var db_pw = "pa$$word";
var db = "mydb";

var con = mysql.createConnection({
    host: host,
    user: db_user,
    password: db_pw,
    database: db
});

con.connect(function(err){
    if(err)throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY,\n\
name VARCHAR(255), address VARCHAR(255))";
    
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table Created\n" + result);
    });
});