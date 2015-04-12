# Disticha

This twitterbot posts random distichs (bits of moral teaching in the form of hexameter poetry) from the *Disticha Catonis*, written in the 3rd–4th century CE by an otherwise unknown Dionysius Cato.

The code itself was cobbled carelessly from various sources and wrestled with through trial and error till it finally worked.

The resulting bot is [@DistichaCatonis](https://twitter.com/DistichaCatonis/).

## Installation

You'll need NPM, NodeJS, and the twit module:

```sudo npm install twit --save```

## Usage

If you build something from this bot, youll probably deployit through Heroku, and there are some things you should know.

1. You don't need to pay for dynos. One dyno is enough.
2. Heroku scales a web dyno by default, but your Twitter bot will use a single worker dyno. You'll need to scale it yourself on the command line:  
```heroku ps:scale worker=1```
3. You don't want to put your Twitter keys in anything committed. They should be stored as environment variables and added on the command line with the following commands (replacing the ellipses with your Twitter keys):

```
heroku config:set CONSUMER_KEY=…
heroku config:set CONSUMER_SECRET=…
heroku config:set ACCESS_TOKEN=…
heroku config:set ACCESS_TOKEN_SECRET=…
```