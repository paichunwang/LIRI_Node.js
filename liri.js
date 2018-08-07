//Requests and config files
require('dotenv').config({ path: './.env' })
var request = require("request");
var Spotify = require('node-spotify-api');

//Variable declaration
var action = process.argv[2] // this is pre-defined since user will always have to enter a action, will prompt if user didn't eneter anything
var variable;

if (action && variable) { //Double if to check user input exists
    if (action == "movie-this") { // Movie IMDB
        if (variable == undefined) { variable = 'Mr. Nobody' } else { variable = process.argv[3]; }
        movie(variable)
    } // Movie IMDB
    else if (action == "spotify-this-song") {
        if (variable == undefined) { variable = '' } else { variable = process.argv[3]; }
        spotify(variable)
    }
    else if (action == "") { }
    else if (action == "") { }
    else if (action == "") { }
    else if (action == "") { }
}

function movie(variable) {
    request(`http://www.omdbapi.com/?t=${variable}&y=&plot=short&apikey=trilogy`, function (error, response, body) {
        // console.log("API RAN"); // Checking if IMDB API ran
        if (!error && response.statusCode === 200) {
        }
        console.log('\n' +
            "Movie Title: ".padEnd(28) + JSON.parse(body).Title + '\n' +
            "Movie Release Year: ".padEnd(28) + JSON.parse(body).Year + '\n' +
            "IMDB Rating: ".padEnd(28) + JSON.parse(body).Rated + '\n' +
            "Rotten Tomatoes Rating: ".padEnd(28) + JSON.parse(body).Ratings[1].Value + '\n' +
            "Country of Production: ".padEnd(28) + JSON.parse(body).Country + '\n' +
            "Language Dialect: ".padEnd(28) + JSON.parse(body).Language + '\n' +
            "Movie Plot: ".padEnd(28) + JSON.stringify(JSON.parse(body).Plot) + '\r\n' +
            "Movie Actors: ".padEnd(28) + JSON.parse(body).Actors + '\n'
        );
    });
}

function spotify(variable) { //This code was supplied by node-spotify-api
    dotenv.connect({
        host: process.env.SPOTIFY_ID
    })

    console.log(host)

    var spotify = new Spotify({
        id: 3144,
        secret: 41141
    });
    spotify.search({
        type: 'track',
        query: 'All the Small Things'
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
}

spotify()