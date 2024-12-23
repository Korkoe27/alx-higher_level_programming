// Write a script that display the status code of a GET request.

// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request

const request = require('request');

request('https://alx-intranet.hbtn.io/status',   function(error, response,   body){
    console.error('error:', error);
    console.log('code:',  response && response.statusCode);
    console.log('body:',    body);
});