const chatLog = new (require("../utils/chat"))();
module.exports = (bot, author, message) => {
  const { prefix } = bot.config;
  chatLog.chat(author, message);
  if (!message.startsWith(prefix)) return;
  let args = message.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;
  const command =
    bot.commands.get(cmd) ||
    Array.from(bot.commands).find(
      (comd) => comd.aliases && comd.aliases.includes(cmd)
    );
  if (command) {
    console.log("BRUH");
  }
};
