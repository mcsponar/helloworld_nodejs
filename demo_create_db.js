var mysql = require('mysql');

var host = "localhost";
var db_user = "demo";
var db_pw = "pa$$word";
var sql = "CREATE DATABASE mydb";

var con = mysql.createConnection({
    host: host,
    user: db_user,
    password: db_pw
});

con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");

    con.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("Database created");
    });
});