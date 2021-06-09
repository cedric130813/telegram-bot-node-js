const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = <Telegram Token>;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Scraper from JSDOM
const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const vgmUrl= 'https://www.soompi.com/article/1473723wpp/mamamoos-wheein-reported-to-leave-rbw-agency-says-discussions-are-still-ongoing';

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

// Listen for any kind of message. There are different kinds of
// messages.
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

bot.onText(/\/hello/, msg => {
  bot.sendMessage(msg.chat.id, "Hey there MIDZY!");
});

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

bot.onText(/\/mitm/, msg => {
  bot.sendMessage(
      msg.chat.id,
      "https://www.youtube.com/watch?v=_ysomCGaZLw"
  );
});

bot.onText(/\/notshy/, msg => {
  bot.sendMessage(
      msg.chat.id,
      "https://www.youtube.com/watch?v=wTowEKjDGkU"
  );
});

bot.onText(/\/streamITZY/, msg => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["/mitm", "/notshy"]]
    }
  });
});

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

//added a simple birthday countdown
// thanks to w3resource at https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php

//Yuna's birthday
today=new Date();
var cmas=new Date(today.getFullYear(), 11, 9);
if (today.getMonth()==11 && today.getDate()>9)
{
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
var yuna_birthday = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php
if (yuna_birthday < 0) {
    var shinyuna = Math.abs(yuna_birthday) +" days since Yuna's birthday!";
} else {
    var shinyuna = Math.abs(yuna_birthday) +" days until Yuna's birthday!";
}

bot.onText(/\/shinyuna/, msg => {
    bot.sendMessage(
        msg.chat.id,
        shinyuna
    );
});

//Lia's birthday
today=new Date();
var cmas=new Date(today.getFullYear(), 6, 21);
if (today.getMonth()==6 && today.getDate()>21)
{
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
var lia_birthday = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
if (lia_birthday < 0) {
    var choilia = Math.abs(lia_birthday) +" days since Lia's birthday!";
} else {
    var choilia = Math.abs(lia_birthday) +" days until Lia's birthday!";
}

bot.onText(/\/choijisu/, msg => {
    bot.sendMessage(
        msg.chat.id,
        choilia
    );
});

//Yeji's birthday
today=new Date();
var cmas=new Date(today.getFullYear(), 4, 21);
if (today.getMonth()==4 && today.getDate()>21)
{
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
var yeji_birthday = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
// console.log(Math.abs(yeji_birthday) +" days left since/until Yeji's Birthday");
if (yeji_birthday < 0) {
    var hwangyeji = Math.abs(yeji_birthday) +" days since Yeji's birthday!";
} else {
    var hwangyeji = Math.abs(yeji_birthday) +" days until Yeji's birthday!";
}

bot.onText(/\/hwangyeji/, msg => {
    bot.sendMessage(
        msg.chat.id,
        hwangyeji
    );
});

//Ryujin's birthday
today=new Date();
var cmas=new Date(today.getFullYear(), 3, 17);
if (today.getMonth()==3 && today.getDate()>17)
{
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
var ryujin_birthday = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
// console.log(Math.abs(ryujin_birthday) +" days left since/until Ryujin's Birthday");
if (ryujin_birthday < 0) {
    var shinryujin = Math.abs(ryujin_birthday) +" days since Ryujin's birthday!";
} else {
    var shinryujin = Math.abs(ryujin_birthday) +" days until Ryujin's birthday!";
}

bot.onText(/\/shinryujin/, msg => {
    bot.sendMessage(
        msg.chat.id,
        shinryujin
    );
});

//Chaeryeong's birthday
today=new Date();
var cmas=new Date(today.getFullYear(), 5, 5);
if (today.getMonth()==5 && today.getDate()>5)
{
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
var chae_birthday = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
// console.log(Math.abs(chae_birthday) +" days left since/until Chaeryeong's Birthday");
if (chae_birthday < 0) {
    var chaeryeong_birthday = Math.abs(chae_birthday) +" days since Chaeryeong's birthday!";
} else {
    var chaeryeong_birthday = Math.abs(chae_birthday) +" days until Chaeryeong's birthday!";
}

bot.onText(/\/leechaeryeong/, msg => {
    bot.sendMessage(
        msg.chat.id,
        chaeryeong_birthday
    );
});

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
