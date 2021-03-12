const { readdirSync } = require("fs"),
  path = require("path");
module.exports = (bot) => {
  const events = readdirSync(path.join(__dirname + `/../events/`)).filter((d) =>
    d.endsWith(".js")
  );
  for (let file of events) {
    const evt = require(`../events/${file}`);
    let ename = file.split(".")[0];
    bot.on(ename, evt.bind(null, bot));
  }
};
