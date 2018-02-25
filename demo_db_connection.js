var mysql = require('mysql');

var host = "localhost";
var username = "demo";
var password = "pa$$word";

var sql = "SELECT * FROM sakila.actor";

var con = mysql.createConnection({
    host: host,
    user: username,
    password: password
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result){
       if(err)throw err;
       console.log("Result: " + result);
    });
});