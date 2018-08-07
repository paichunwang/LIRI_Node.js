
var request = require("request");

var action = process.argv[2]
var variable = process.argv[3]

//IMDB Movie-this command; default title search Mr. Nobody
if (action == "movie-this" && variable == undefined) {
    variable = 'Mr. Nobody'
}
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