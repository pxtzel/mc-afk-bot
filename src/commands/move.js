var mineflayer = require("mineflayer");
var move = require("mineflayer-navigate")(mineflayer);
let running = false;
module.exports = {
  name: "move",
  run: (message, args, bot) => {
    move(bot);
    if (args[0] == "stop") {
      bot.chat("ok");
      running = false;
      return bot.navigate.stop("interrupted");
    }
    if (running) {
      bot.chat("Already moving");
    } else {
      var target = bot.players[message.author].entity;
      if (!target) {
        bot.chat("You can not use this");
      } else {
        bot.chat("Trying to come near " + message.author);
        bot.navigate.to(target.position);
        running = true;
      }
    }
    bot.navigate.on("pathFound", function (path) {
      bot.chat(
        `Going to [${message.author}]. Approximately ${path.length} blocks away`
      );
    });
    bot.navigate.on("cannotFind", function (closestPath) {
      bot.chat("I could not find a way to you. Please make a way for me");
      bot.navigate.walk(closestPath);
    });
    bot.navigate.on("arrived", function () {
      bot.chat(`Reached ${message.author}`);
      running = false;
    });
    bot.navigate.on("interrupted", function () {
      bot.chat("I could not come to " + message.author);
    });
  },
};
