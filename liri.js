require("dotenv").config();

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var request = require("request");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);


var client = new Twitter(keys.twitter);

var getArtistNames = function(artist) {
  return artist.name;
};

var getMeSpotify = function(songName) {
  if (songName === undefined) {
    songName = "What's my age again";
  }
var params = {screen_name: "calitexfilmgirl"};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].created_at);
      console.log("");
      console.log(tweets[i].text);
    }
  }
});
