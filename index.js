require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "🎉 Welcome to GoldenMoneyBot!\n\nBot is now online successfully."
  );
});

bot.launch();

console.log("Bot Started...");