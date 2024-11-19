// Write a script that prints all characters of a Star Wars movie:

// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// Display one character name by line
// You must use the Star wars API
// You must use the module request




const request = require('request');

function showActors(id) {
    const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

    request(url, function(error, response, body){
        if(error){
            console.error('Error:',error);
            return;
        }





        const data  =   JSON.parse(body);

        console.log('Title:',data.title);

        if(!data.characters){
            console.error('No results found in the API response.');
            return;
        }

        const filmActors = data.characters;

        // console.log(filmActors);



        for(const actor of filmActors){
        request(actor, function(error,response){
            if(error){
            console.error('Error:',error);
            }

            const details = JSON.parse(response.body);

            console.log(details.name);


    
        });
    }



    });



}

showActors(3);