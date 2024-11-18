const request = require('request');

function fetchMovieNumber() {
    const url = 'https://swapi-api.alx-tools.com/api/films/';
    const wedgeAntillesUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

    request(url, function (error, response, body) {
        if (error) {
            console.error('Error:', error);
            return;
        }

        const data = JSON.parse(body);

        if (!data.results) {
            console.error('No results found in API response.');
            return;
        }

        const movieCount = data.results.filter((film) => film.characters.includes(wedgeAntillesUrl)).length;

        console.log(movieCount);
    });
}

fetchMovieNumber();
