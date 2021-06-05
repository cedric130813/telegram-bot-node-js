const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "1702260551:AAFfEt81usxjKjhTSgjhTtgvw5NUt-c82xA";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

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
