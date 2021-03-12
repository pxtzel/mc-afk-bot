const { readdirSync } = require("fs"),
path = require("path")
module.exports = (bot) => {
  const commands = readdirSync(path.join(__dirname + "/../commands")).filter((file) =>
    file.endsWith(".js")
  );
  for (let file of commands) {
    let pull = require(`../commands/${file}`);
    if (pull.name) {
      bot.commands.set(pull.name, pull);
    }
    if (pull.aliases && Array.isArray(pull.aliases))
      pull.aliases.forEach((alias) => bot.aliases.set(alias, pull.name));
  }
  0;
};
