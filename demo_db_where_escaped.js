var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "demo",
    password: "pa$$word",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err;
    
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
    
    sql = 'SELECT * FROM customers WHERE address = ?';
    con.query(sql, [adr], function(err, result){
       if(err) throw err;
       console.log(result);
    });
    
    var name = 'Amy';
    sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function(err, result){
       if(err) throw err;
       console.log(result);
    });
});