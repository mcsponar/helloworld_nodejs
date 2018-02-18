/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

const hostname = 'localhost';
const port = 8080;

http.createServer(function (req, res) {

    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/lakes_000/' + files.filetoupload.name;
            res.write(newpath)
            fs.rename(oldpath, newpath, function (err) {
                res.write('\nFile uploaded and moved');
                res.end();
            });

        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit" value="submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
