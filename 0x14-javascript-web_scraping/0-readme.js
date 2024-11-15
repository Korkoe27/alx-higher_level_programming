// Write a script that reads and prints the content of a file.

// The first argument is the file path
// The content of the file must be read in utf-8
// If an error occurred during the reading, print the error object

let http = require('http');
let fs = require('fs');

http.createServer(function (req, res){
    fs.readFile('test.js', function(err, data)  {
        res.writeHead(200,  {'Content-Type':    'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);