// Requirements
var Twit = require('twit');

// Set the Twitter secret keys as environment variables
// (pushed through Heroku, not committed through git).
var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY
, consumer_secret:      process.env.CONSUMER_SECRET
, access_token:         process.env.ACCESS_TOKEN
, access_token_secret:  process.env.ACCESS_TOKEN_SECRET
})

// Add the source text: this may be the only thing you'll change
var textFile = "./disticha.txt";

// Read the file, split it into array elements whereever there
// are two new lines (i.e., between entries), and pick one.
function randomTweet() {
  var fs = require('fs');
  fs.readFile(textFile, 'utf8', function(error, data) {

    // Break our text file up into an array of entries after two new
    // line characters (which allows for multiline tweets, e.g., poems).
    var entries = data.split("\n\n");

    // Grab a random entry from the entries array.
    var randomEntry = Math.floor(Math.random()*entries.length);
    if(+randomEntry > entries.length){
      throw new Error('No entries found!');
    }

    // Set the random entry and prepare to tweet it.
    var chosenEntry = entries[+randomEntry];

    // Make sure it's tweetable!
    if (chosenEntry.length > 140) {
      throw new Error('The entry is too long to tweet.');
    }

    // Prepare to tweet the chosen entry.
    T.post('statuses/update', { status: chosenEntry }, function(err, data, response) {
      console.log(data)
    })
  })
};

// Tweet it the first time
randomTweet();

// And then repeat on your desired interval.
// 1000ms (1 second) * 60 = 1 minute * 60 = 1 hour
setInterval(randomTweet, 1000 * 60 * 60);