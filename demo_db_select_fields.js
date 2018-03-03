var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "demo",
    password: "pa$$word",
    database: "mydb"
});

con.connect(function (err) {
    if (err)
        throw err;
    var sql = "SELECT name, address FROM customers";
    con.query(sql, function (err, result, fields) {
        if (err)
            throw err;
        console.log(fields);
    });
});
