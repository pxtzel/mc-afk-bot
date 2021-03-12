const mc = require("mineflayer");

const config = require("../config.json");

const { port, ip, botName } = config.server;

let bot = mc.createBot({
  host: ip,
  port: port,
  username: botName,
});

bot.commands = new Map();
bot.aliases = new Map();

["command", "event"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});
