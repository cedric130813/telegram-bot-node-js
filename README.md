#### This is a [Telegram Bot API project](https://github.com/cedric130813/telegram-bot-node-js/blob/main/telegram-bot.js) using Node.js, which can perform the following functions:
*Mini-functions*
1. Automatically replies links, gifs, images, messages when user inputs specific Telegram commands (e.g. /command)
2. Displays keyboard of specific Telegram commands when running /start
3. *Web Scrapes* elements of a website, e.g. image or title (using JSDOM library) in [scraper.js](https://github.com/cedric130813/telegram-bot-node-js/blob/main/scraper.js)
4. Gives a *sentiment analysis scoring* of a response and returns whether it is positive, negative or undetermined sentiment, as well as the sentiment score, using [sentiment.js](https://www.npmjs.com/package/sentiment)
5. Sends a GET Request to Twitter server using Twitter API to fetch latest tweets from a specific user, as well as able to send a POST request to send data to the Twitter server to post a tweet
