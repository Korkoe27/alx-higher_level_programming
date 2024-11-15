// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

// The first argument is the movie ID
// You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
// You must use the module request


const request = require('request');

const id = process.argv[2];

function fetchFilm(id) {
    request(`https://swapi-api.alx-tools.com/api/films/${id}`, function (error, response, body) {
        if (error) {
            console.error('Error:', error);
            return;
        }
        
        const data = JSON.parse(body)
        // console.log('Status Code:', response && response.statusCode);
        console.log(data['title']);
    });


}

fetchFilm(id);