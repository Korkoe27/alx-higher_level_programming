// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request



const request = require('request');


function fetchMovieNumber(){
    request('https://swapi-api.alx-tools.com/api/films/', function(error, response, body){
        if(error){
            console.error(error);
            return;
        }

        

        const data= JSON.parse(body);


        const results = data.results;
        // console.log(results);

        for (const element of results){
            // console.log(element.title);

            const characters = results.filter((element) => element.characters === 'https://swapi-api.alx-tools.com/api/people/18/');
            console.log(characters);
        }




    });
}

fetchMovieNumber();