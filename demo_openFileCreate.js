/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.open('mynewfile2.txt', 'w',
            function (err, file) {
                if (err)
                    throw err;
                console.log('Saved!');
            });
}).listen(8080);
