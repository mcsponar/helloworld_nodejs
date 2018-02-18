/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.appendFile('mynewfile1.txt', '\nThis is my updated text.' + Date(),
    function(err){
        if(err) throw err;
        console.log('Updated');
    });
}).listen(8080);
