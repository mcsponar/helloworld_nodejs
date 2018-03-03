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
    var sql = "INSERT INTO customers (name, address) VALUES ('michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("1 recored inserted, ID: " + result.insertId);
    });
});