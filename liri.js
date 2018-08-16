//Requests and config files
require('dotenv').config({ path: './.env' })

let request = require("request"); //Request System for exporting and importing functions/keys
let Spotify = require('node-spotify-api');
let dotenv = require('dotenv'); //Request System for custom environment
let fs = require('fs'); //File System NPM for reading/writing files
let Twitter = require('twitter');
let keys = require('./key.js');


//Variable declaration
let action = process.argv[2]; // this is pre-defined since user will always have to enter a action, will prompt if user didn't eneter anything
let variable = process.argv[3];

// if (action && variable) { //Double if to check user input exists
if (action == "movie-this") { // Movie IMDB
    if (variable == undefined) { variable = 'Mr. Nobody' } else { variable = process.argv[3]; }
    movie(variable);
} // Movie IMDB
else if (action == "spotify-this-song") { // Spotify
    if (variable == undefined) { variable = 'Ace of Base' } else { variable = process.argv[3]; }
    spotify(variable);
}// Spotify
else if (action == "my-tweets") {
    twitter();
}
else if (action == "do-what-it-says") {
    random();
}
else {
    console.log("Nothing Ran, check your spellings?");
}

function movie(variable) {
    let moviekey = keys.imdb.key;

    request(`http://www.omdbapi.com/?t=${variable}&y=&plot=short&apikey=${moviekey}`, function (error, response, body) {
        // console.log("API RAN"); // Checking if IMDB API ran
        if (!error && response.statusCode === 200) {
            console.log('\n' +
                "Movie Title: ".padEnd(28) + JSON.parse(body).Title + '\n' +
                "Movie Release Year: ".padEnd(28) + JSON.parse(body).Year + '\n' +
                "IMDB Rating: ".padEnd(28) + JSON.parse(body).Rated + '\n' +
                // "Rotten Tomatoes Rating: ".padEnd(28) + JSON.parse(body).Ratings[0].Value + '\n' +
                "Country of Production: ".padEnd(28) + JSON.parse(body).Country + '\n' +
                "Language Dialect: ".padEnd(28) + JSON.parse(body).Language + '\n' +
                "Movie Plot: ".padEnd(28) + JSON.stringify(JSON.parse(body).Plot) + '\r\n' +
                "Movie Actors: ".padEnd(28) + JSON.parse(body).Actors + '\n'
            );
        }
    });
}

function spotify(variable) { //This code was supplied by node-spotify-api

    let myid = keys.spotify.id;
    let mysecret = keys.spotify.secret;

    let spotify = new Spotify({
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
    });
}

function twitter() {
    console.log("Running Twitter Call");
    let twitterKey = keys.twitter.consumer_key;
    let twitterSecret = keys.twitter.consumer_secret;
    let twitterAKey = keys.twitter.access_token_key;
    let twitterASecret = keys.twitter.access_token_secret;

    let client = new Twitter({
        consumer_key: twitterKey,
        consumer_secret: twitterSecret,
        access_token_key: twitterAKey,
        access_token_secret: twitterASecret
    });

    client.get('search/tweets', { q: 'node.js' }, function (error, tweets, response) {
        for (a = 0; a < tweets.statuses.length; a++) {
            let tweeted = tweets.statuses[a].text;
            console.log(`* TWEET #${a} *********************************************************************************\nTweeted at: ${tweets.statuses[a].created_at}\nTweet: ${tweeted}\n* END OF TWEET #${a} **************************************************************************\n\n`);
        }
    });
}

function random() {
    fs.readFile("random.txt", "UTF8", function (err, data) {
        let ramChoices = data.split(", ")
        let command = Math.floor((Math.random() * 3)) // Random which three choice it picks (Rang: 0,1,2)
        let choice = Math.floor((Math.random() * ramChoices.length)) // Random a word from the random.txt
        if (command == 0) { //IMDB
            movie(ramChoices[choice]);
        }
        else if (command == 1) { //Spotify
            spotify(ramChoices[choice]);
        }
        else if (command == 2) { //Twitter
            twitter();
        }
    });
}