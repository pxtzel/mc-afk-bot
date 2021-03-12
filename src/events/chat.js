const chatLog = new (require("../utils/chat"))();
module.exports = (bot, author, message) => {
  const { prefix } = bot.config;
  chatLog.chat(author, message);
};
