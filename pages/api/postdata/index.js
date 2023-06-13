const TelegramBot = require("node-telegram-bot-api");
const process = require("process");

const token = process.env.TG_KEY;
const chatId = process.env.TG_CHAT_ID;

const bot = new TelegramBot(token, {
  polling: false,
});

export default function handler(req, res) {
  const { method, body } = req;

  if (method == "POST") {
    bot.sendMessage(chatId, JSON.stringify(body))
      .then(
        (result) => {
        res.status(200).json({"code": "200", "message": "Your message has been delivered, I will contact you soon"}),
        console.log(result)
        },
        (error) => {
          res.status(500).json({"code": '500', "message": "There is a problem with the server, please try again later or contact us using the links below"}),
          console.error(error)
        }
      )
  } else {
    return res.status(500).json({ response: "This method not support" });
  }
}
