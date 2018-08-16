# LIRI_Node.js

This file demonstrate the utilization of node.js and .gitignore and .env to develope a word-based API call. (Similar to SIRI but with Terminal and Command Prompt words)

## Getting Started

Download the repository using your preferred method:

```
Option #1 (SSH): git@github.com:paichunwang/LIRI_Node.js.git
Option #2 (HTTPS): https://github.com/paichunwang/LIRI_Node.js.git
Option #3 (ZIP): https://github.com/paichunwang/LIRI_Node.js/archive/master.zip
```

## Prerequisites

```
Requirement #1: A terminal for running the application, such as GitBash, VSCode or etc...
Requirement #2: A valid [Spotify](https://developer.spotify.com/documentation/web-api/) API key 
Requirement #3: A valid [Twitter Developer Account](https://apps.twitter.com/app/new) and API key
Requirement #4: A valid [IMDB](http://www.omdbapi.com/) API Key

Requirement #5: Install NPM [Request](https://www.npmjs.com/package/request)
Requirement #6: Install NPM [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
Requirement #7: Install NPM [DotEnv](https://www.npmjs.com/package/dotenv)
Requirement #8: Install NPM [Twitter](https://www.npmjs.com/package/twitter)
```


### Installing

Once cloned or downloaded using your preferred method in 'Getting Started', open the liri.js file with the terminal of your choice.

**IMPORTANT: PLEASE CREATE AND COMPILE YOUR OWN API KEYS IN THE ROOT FOLDER ENCLOSED BY .env with the following code**

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

# IMDB API keys

IMDB_KEY=your-IMDB-api-key
```

## Testing Phase

To test this functionality,
1. open the liri.js file wiht your choice of terminal.
2. in the terminal run the any of the following command:
   - node liri.js movie-this
     - returns 'Mr. Nobody' as the keyword, since no argument was passed to search
   - node liri.js movie-this *keyword*
     - return movie closest match the IMDB database with given keyword; will only return one result
   - node liri.js spotify-this-song
     - return 'Ace of Base' song search, since no argument was passed to search
   - node liri.js spotify-this-song *keyword*
     - return song title closest match the search keyword; will only return one result
   - node liri.js my-tweets
     - return the last 20 tweets you have on your twitter account
   - node liri.js do-what-it-says
     - return one of the three main commands combined with a random keyword from the random.txt file and run as command
   - ie. node liri.js movie-this blue
   - ie. node liri.js spotify-this-song awesome

## Deployment

1. download the whole repository.
2. create and enter all the required key in the .env file. *Refer to the "INSTALLING" for .env setup and structure.

## Built With

* [HTML](https://www.w3.org/standards/webdesign/htmlcss) - the language for describing the structure of Web page.
* [Bootstrap MAXCDN 3.3.7](http://blog.getbootstrap.com/2016/07/25/bootstrap-3-3-7-released/) - version of bootstrap used to dynamically format HTML webpages.
* [VSCode](https://code.visualstudio.com/) - free code editor that is used to redefine and optimize for the building and debugging modern web and cloud applications.
* [GIPHY API](https://developers.giphy.com/) - pre-made API that helps to natively embed a library of Gifs.

## Contributing

This webpage with build under the aid and instruction of affiliated instructors at the [UTAUS201805FSF4-Class Coding BootCamp](https://techbootcamps.utexas.edu/coding/).

## Authors

* **Patrick Wang** - [Firebase-Train-RPS](https://github.com/paichunwang/Firebase-Train-RPS)

## License

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) website for details

## Acknowledgments

[Antonio Gage](https://github.com/antoniojgage) - help with initial development and structure/refinement of github pages and files.
