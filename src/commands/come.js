var mineflayer = require("mineflayer");
var move = require("../../modules/navigator")(mineflayer);
let running = false;
let stap;
module.exports = {
  name: "come",
  run: (message, args, bot) => {
    move(bot);
    if (args[0] == "stop") {
      if (!running) bot.chat("Not moving");
      else if (stap) {
        bot.chat("Stopped moving");
        running = false;
        stap.stop("iterrupted");
      } else {
        bot.chat("Could not stop moving");
      }
    } else if (running) {
      bot.chat("Already moving. Type '!come stop' to stop moving");
    } else {
      var target = bot.players[message.author].entity;
      if (!target) {
        bot.chat("You can not use this");
      } else {
        bot.chat("Trying to come near " + message.author);
        bot.navigate.to(target.position);
        running = true;
        stap = bot.navigate;
      }
    }
    bot.navigate.on("pathGot", function (path) {
      console.log("OK");
      bot.chat(
        `Going to [${message.author}]. Approximately ${path.length} blocks away`
      );
    });
    bot.navigate.on("stop", function (reason) {
      switch (reason) {
        case "arrived":
          bot.chat(`Reached ${message.author}`);
          running = false;
          break;
        case "interrupted":
          bot.chat(`Could not walk to ${message.author}`);
          running = false;
          break;
        case "obstructed":
          bot.chat(
            `My path is obstructed. Please make a way, ${message.author}`
          );
          running = false;
          break;
      }
    });
    setTimeout(function () {
      running = false;
    }, 5000);
  },
};
