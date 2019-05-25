require("dotenv").config();
var fs = require('fs');
var axios = require('axios');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var userAction = process.argv[2];
var userRequest = process.argv.slice(3);

var movieRequest = function (data) {

    if (data.length == 0) {

        console.log(`If you haven't watched "Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/ \nIt's on Netflix!`);

    } else {

        axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${data}`)
            .then(function (response) {

                var imdbRating = response.data.Ratings.filter((obj) => { return obj.Source === 'Internet Movie Database' });
                var rtRating = response.data.Ratings.filter((obj) => { return obj.Source === 'Rotten Tomatoes' });

                console.log(
                    `Title: ${response.data.Title}\nRelease Year: ${response.data.Year}\nIMDB Rating: ${imdbRating[0].Value}\nRotten Tomatoes Rating: ${rtRating[0].Value}\nCountry Produced: ${response.data.Country}\nLanguage: ${response.data.Language}\nPlot: ${response.data.Plot}\nActors: ${response.data.Actors}`);
            });

    };
};

var concertRequest = function (data) {

    axios.get(`https://rest.bandsintown.com/artists/${data}/events?app_id=codingbootcamp`)
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(`Venue: ${response.data[i].venue.name}, Location: ${response.data[i].venue.city}, Country: ${response.data[i].venue.country}, Date: ${response.data[i].datetime} \n`);
            }
        }).catch(function (error) {
            console.log(error);
        });

};

var spotifyRequest = function (data) {

    if (data.length == 0) {

        spotify.search({ type: 'track', query: 'The Sign' }, function (err, data) {

            if (err) {
                return console.log(err);
            };

            console.log(`Artist(s): ${data.tracks.items[0].artists[0].name}\nName: ${data.tracks.items[0].name}\nPreview URL: ${data.tracks.items[0].preview_url}`);

        });

    } else {

        spotify.search({ type: 'track', query: data }, function (err, data) {

            if (err) {
                return console.log(err);
            };

            console.log(`Artist(s): ${data.tracks.items[0].artists[0].name}\nName: ${data.tracks.items[0].name}\nPreview URL: ${data.tracks.items[0].preview_url}`);

        });
    }
}


if (userAction === 'concert-this') {

    concertRequest(userRequest);

};

if (userAction === 'spotify-this-song') {
    spotifyRequest(userRequest);
};

if (userAction === 'movie-this') {

    movieRequest(userRequest);

};

if (userAction === 'do-what-it-says') {

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log( error );
        }

        var randomRequest = data.split(',');

        if (randomRequest[0] === 'spotify-this-song') {

            spotifyRequest(randomRequest[1]);

        } else if (randomRequest[0] === 'movie-this') {

            movieRequest(randomRequest[1]);

        } else {
            concertRequest(randomRequest[1]);
        }

    });

};

