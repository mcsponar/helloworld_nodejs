var mysql = require('mysql');

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

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});