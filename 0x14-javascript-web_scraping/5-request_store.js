// Write a script that gets the contents of a webpage and stores it in a file.

// The first argument is the URL to request
// The second argument the file path to store the body response
// The file must be UTF-8 encoded
// You must use the module request


const request = require('request');
const fs = require('fs');

function storeContent(){
    const url = request('http://loripsum.net/api');

    request(url, function(error,response, body){
        if(error){
            console.error('Error:',error);
            return;
        }

        fs.appendFile('loripsum.txt',body,function (err){
            if(err) throw err;
            console.log('Saved!');
        });
    });

}

storeContent();