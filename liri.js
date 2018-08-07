//Requests and config files
require('dotenv').config({ path: './.env' })

let request = require("request");
let Spotify = require('node-spotify-api');
let dotenv = require('dotenv');
let fs = require('fs');

//Variable declaration
var action = process.argv[2]; // this is pre-defined since user will always have to enter a action, will prompt if user didn't eneter anything
var variable = process.argv[3];

// if (action && variable) { //Double if to check user input exists
    if (action == "movie-this") { // Movie IMDB
        if (variable == undefined) { variable = 'Mr. Nobody' } else { variable = process.argv[3]; }
        movie(variable);
    } // Movie IMDB
    else if (action == "spotify-this-song") { // Spotify
        if (variable == undefined) { variable = 'Ace of Base' } else { variable = process.argv[3]; }
        spotify(variable);
    }// Spotify
    else{
        console.log("Nothing Ran, check your spellings?");
    }
    // else if (action == "") { }
    // else if (action == "") { }
    // else if (action == "") { }
    // else if (action == "") { }
// }

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

    // console.log(process.env.SPOTIFY_ID);
    // console.log(process.env.SPOTIFY_SECRET);

    let myid = process.env.SPOTIFY_ID;
    let mysecret = process.env.SPOTIFY_SECRET;

    var spotify = new Spotify({
        id: myid,
        secret: mysecret
    });
    spotify.search({
        type: 'track',
        query: variable,
        limit: 10
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            console.log('\n' +
                "Artist(s) Name: ".padEnd(28) + data.tracks.items[0].album.artists[0].name + '\n' +
                "Song Title: ".padEnd(28) + data.tracks.items[0].name + '\n' +
                "Preview: ".padEnd(28) + data.tracks.items[0].preview_url + '\n' +
                "Album Title: ".padEnd(28) + data.tracks.items[0].album.name
            );
        }
        // console.log(data.tracks.items[0].album.artists[0].name); //Artist Name
        // console.log(data.tracks.items[0].name); //Song Title
        // console.log(data.tracks.items[0].preview_url); //Preview URL - Need to integrate clickable link in terminal
        // console.log(data.tracks.items[0].album.name) //Album name
    });
}