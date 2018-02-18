/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.writeFile('mynewfile3.txt', 'This is my text', 
    function(err){
       if(err) throw err;
       console.log('Replaced');
    });
}).listen(8080);
