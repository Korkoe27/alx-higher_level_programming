let fs = require('fs');

fs.appendFile('test.js',    'console.log("New line added.");',   function(err){
    if  (err)   throw err;
    console.log('saved');
});