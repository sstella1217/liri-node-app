
// Users passes a choice into the console 


var choice = process.argv[2];

if (process.argv[2] === 'my-tweets'){
	twitter();
}
else if (process.argv[2] === 'spotify-this-song'){
	spotify();
}
else if (process.argv[2]=== 'movie-this'){
	movie();
}
else if (process.argv[2]=== 'do-what-it-says'){
	doIt();
}
else {
 console.log ("An option was not provided")
};


//function to use the twitter api

//pulls information from keys.js

function twitter() {

var keys = require("./keys.js");

var twit = require('twit');

//sets the twitter keys
var T = new twit(keys);

// sets account by screen name
var params = {screen_name: 'sstella20171'};

// connects with the API
T.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
   // console.log(response);
  }
console.log(JSON.stringify(tweets, null, 2));

});

  

//This code pulls the data but code is needed to pull out just the information needed.


//display text data that shows each tweet
//display created_at information for each tweet

//});
};



// Function to use the spotify api
function spotify(){

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '9e5117530267436aa0c4a24cf03fd8ea',
  secret: 'd16d698e94b741b0b494189ac94a3c7f'
});
 
spotify.search({ type: 'artist', query: "Ace of Base"}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data, null, 2));

});
};
//This code pulls data form spotify but additional code is needed to pull out just the information needed.
//display Artist(s)
//display The song's name
//display preview link
//display the album that the song is from




// Function to use the omdb api
function movie() {

var omdb = require('omdb');
 
omdb.search('saw', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });

})
}

// This code does not work yet but it will pull data from the omdb and additional will be needed to pull out just the information neeeded.

//display Title of the movie
//display year the movie come out
//display IMDB Rating of the movie
//display Rotten Tomatoes Rating of the movie
//display country where the movie was produced
//display Language of the movie
//display plot of the movie
//display Actores in the movie



//Function to use the request api

function doIt() {

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

};

//pulls information from request