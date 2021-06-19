const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = <TOKEN>;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Scraper from JSDOM
const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const vgmUrl= 'https://www.soompi.com/article/1473723wpp/mamamoos-wheein-reported-to-leave-rbw-agency-says-discussions-are-still-ongoing';

// Sentiment Analysis
var Sentiment_analysis = require('sentiment');

// Twitter API
var Twitter = require('twitter');
require('dotenv').config();

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of messages.
bot.on("message", msg => {
  var Hi = "hi";
  if (
    msg.text
      .toString()
      .toLowerCase()
      .indexOf(Hi) === 0
  ) {
    bot.sendMessage(msg.chat.id, "Hey there MIDZY!");
  }

  var itzy = "itzy";
  if (
    msg.text
      .toString()
      .toLowerCase()
      .indexOf(itzy) === 0
  ) {
    bot.sendMessage(msg.chat.id, "https://itzy.jype.com/");
  }

  var yuna = "yuna";
  if (
    msg.text
      .toString()
      .toLowerCase()
      .indexOf(yuna) === 0
  ) {
    bot.sendMessage(
      msg.chat.id,
      "https://thumbs.gfycat.com/BareUnconsciousAmericanblackvulture-max-1mb.gif"
    );
  }
});

// replies "Hey there MIDZY" (note: MIDZY is a term for a fan of ITZY, a K-pop group) in response to /hello
bot.onText(/\/hello/, msg => {
  bot.sendMessage(msg.chat.id, "Hey there MIDZY!");
});

// sends gif link in response to /yuna, /yeji, /ryujin, /chaeryeong and /lia
bot.onText(/\/yuna/, msg => {
  bot.sendMessage(
    msg.chat.id,
    "https://thumbs.gfycat.com/BareUnconsciousAmericanblackvulture-max-1mb.gif"
  );
});

bot.onText(/\/yeji/, msg => {
  bot.sendMessage(
    msg.chat.id,
    "https://1.bp.blogspot.com/-fu1GqQAqGZE/XXBE53bKvAI/AAAAAAAAvdc/fTPlL6SDJncDADQclNuYCYFus2MtpWN2ACLcBGAs/s1600/download.gif"
  );
});

bot.onText(/\/ryujin/, msg => {
  bot.sendMessage(
    msg.chat.id,
    "https://i.pinimg.com/originals/90/00/54/900054a1c7a3e68b0ba3f708847fc366.gif"
  );
});

bot.onText(/\/chaeryeong/, msg => {
  bot.sendMessage(
    msg.chat.id,
    "https://i.pinimg.com/originals/7a/f5/05/7af5052bbb98c13068f66884516a2378.gif"
  );
});

bot.onText(/\/lia/, msg => {
  bot.sendMessage(
    msg.chat.id,
    "https://cdn.kstarlive.com/image/1586136714764-KakaoTalk_20200406_103119446.gif"
  );
});

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["/yeji", "/lia"], ["/ryujin", "/chaeryeong", "/yuna"]]
    }
  });
});

// sends YouTube video links in response to /mitm command
bot.onText(/\/mitm/, msg => {
  bot.sendMessage(
      msg.chat.id,
      "https://www.youtube.com/watch?v=_ysomCGaZLw"
  );
});

// sends YouTube video links in response to /notshy command
bot.onText(/\/notshy/, msg => {
  bot.sendMessage(
      msg.chat.id,
      "https://www.youtube.com/watch?v=wTowEKjDGkU"
  );
});

// sends keyboard options of /mitm and /notshy in response to /streamITZY command
bot.onText(/\/streamITZY/, msg => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["/mitm", "/notshy"]]
    }
  });
});

// sends message in response to "Hey bot"
bot.on("message", msg => {
  var MIDZY_Alert = "hey bot";
  if (
      msg.text
          .toString()
          .toLowerCase()
          .indexOf(MIDZY_Alert) === 0
  ) {
    bot.sendMessage(msg.chat.id, "Hey there " + msg.from.first_name + ", I see you stan ITZY, so here you go");
    bot.sendPhoto(msg.chat.id,"https://i.pinimg.com/originals/f9/3a/8d/f93a8d254aa6721a071a2705c2409f7c.png" );
  }
});

// insert link of the .gif file, it can be http link, local file or a file from telegram's server - requires telegram gif id
bot.onText(/\/trio/, msg => {
    bot.sendAnimation(
        msg.chat.id,"original.gif"
    );
});

// Added a simple birthday countdown
function calcBirthday(month, day, name) {
    var today=new Date();
    var birthday=new Date(today.getFullYear(), month, day);
    if (today.getMonth()== month && today.getDate()> day)
    {
        birthday.setFullYear(birthday.getFullYear()+1);
    }
    var one_day=1000*60*60*24;
    var calculatedBirthday = Math.ceil((birthday.getTime()-today.getTime())/(one_day));

    if (calculatedBirthday < 0) {
        var birthdayDays = Math.abs(calculatedBirthday) +" days since " + name + "'s birthday!";
    } else {
        var birthdayDays = Math.abs(calculatedBirthday) +" days until " + name + "'s birthday!";
    }
    return birthdayDays
};

bot.onText(/yunabirthday/i, sendReply => {
        var Yuna_Birthday = calcBirthday(11,9, "Yuna")
        bot.sendMessage(sendReply.chat.id, Yuna_Birthday)
    }
)
bot.onText(/liabirthday/i, sendReply => {
        var Lia_Birthday = calcBirthday(6,21, "Lia")
        bot.sendMessage(sendReply.chat.id, Lia_Birthday)
    }
)
bot.onText(/chaebirthday/i, sendReply => {
        var Chae_Birthday = calcBirthday(5,5, "Chaeryeong")
        bot.sendMessage(sendReply.chat.id, Chae_Birthday)
    }
)
bot.onText(/yejibirthday/i, sendReply => {
        var Yeji_Birthday = calcBirthday(4,21, "Yeji")
        bot.sendMessage(sendReply.chat.id, Yeji_Birthday)
    }
)
bot.onText(/ryujinbirthday/i, sendReply => {
        var Ryujin_Birthday = calcBirthday(3,17, "Ryujin")
        bot.sendMessage(sendReply.chat.id, Ryujin_Birthday)
    }
)

// scraped from https://www.soompi.com/article/1473723wpp/mamamoos-wheein-reported-to-leave-rbw-agency-says-discussions-are-still-ongoing
got(vgmUrl).then(response =>{
    const dom_img = new JSDOM(response.body);
    const imgSrc = dom_img.window.document.querySelector('.image-wrapper img').getAttribute("data-src");
    console.log(imgSrc);
    bot.onText(/\/scrape/, msg => {
        bot.sendMessage(
            msg.chat.id,
            imgSrc
        );
    });
}).catch(err => {
    console.log(err);
});

// Sentiment analysis of response to the bot
bot.on("message", msg => {
    var sentiment_text = msg.text
    var sentiment_response = new Sentiment_analysis();
    var result_sentiment = sentiment_response.analyze(sentiment_text), result_sentiment_decision;
        if (result_sentiment.score > 0) {
            result_sentiment_decision = "positive";
        }
        else if (result_sentiment.score < 0) {
            result_sentiment_decision = "negative";
        }
        else {
            result_sentiment_decision = "undetermined";
        }
    bot.sendMessage(
        msg.chat.id,
        "The sentiment is " + result_sentiment_decision + " and the sentiment score is " + result_sentiment.score);
});


// stores API and secrets keys in .env
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// sends a HTTP POST request to the Twitter API and posts "I Love Twitter"
client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
});

// sends a HTTP GET request to the Twitter API
var params = {screen_name: 'ITZYofficial'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        // console.log(tweets);
        // console.log(response);
        // console.log(tweets);
        const array_itzy = Object.entries(tweets);
        // console.log(array_itzy[0][1].text);
        // 0 denotes the first tweet, 1 denotes the text
        const text_itzy = array_itzy[0][1].text;
        // console.log(text_itzy);
        bot.onText(/\/twitter_GET/, msg => {
            bot.sendMessage(
                msg.chat.id,
                text_itzy
            );
        });
    }
});
