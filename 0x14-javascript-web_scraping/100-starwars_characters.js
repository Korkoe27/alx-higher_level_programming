// Write a script that prints all characters of a Star Wars movie:

// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// Display one character name by line
// You must use the Star wars API
// You must use the module request



const request = require('request');

function showActors(id) {
    const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
    const list = 'https://swapi-api.alx-tools.com/api/people';


    request(url, function(error, response, body){
        if(error){
            console.error('Error:',error);
            return;
        }

        request(list, function(error, response, body){
            if(error){
                console.error('Error:',error);
                return;
            }

            const actors = JSON.parse(body);

        });



        const data  =   JSON.parse(body);

        if(!data.characters){
            console.error('No results found in the API response.');
            return;
        }

        const filmActors = data.characters;
        console.log(filmActors);

    });


}

showActors(5);