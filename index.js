const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var mineflayer = require("mineflayer");
let joined = false;
var host = "mc.dantoast.xyz";
var username = "PeakBot";
var password = "";
// code start
var bota = mineflayer.createBot({
  host: host,
  username: username,
  password: password,
})
events(bota);
function events(bot) {
  input(bot);
  function input(bot) {
    rl.question(":", function (name) {
      bot.chat(name);
      input(bot);
    });
  }
    bot.setControlState("jump", true);
  bot.on("chat", (user, message) => {
    if (user == username) return;
    console.log(user + ":" + message);
    command(message, bot);
  });
  bot.on("playerJoined", (player) => {
    if (!joined) return;
    if (player.username == username) return;
    let name = player.username;
    console.log(name + " joined");
  });
  bot.on("playerLeft", (player) => {
    if (player.username == username) return;
    let name = player.username;
    console.log(name + " left");
  });
  bot.on("kicked", (reason) => {
    console.log("Kicked for: " + reason);
  });
  bot.on("login", async () => {
    console.log("Joined");
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);
    joined = true;
    input(bot);
  });
  bot.on("end", async () => {
    console.log("Disconnected.");
    joined = false;
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);
    try {
      bot.quit();
    } catch (e) {}
    bote = mineflayer.createBot({
      host: host,
      username: username,
      password: password,
    });
    console.log("Reconnected");
    events(bote);
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](2000);
    joined = true;
  });
  function command(message, bot) {
    const msg = message.toLowerCase();
    if (!msg.startsWith("!")) return;
    const args = message.slice(1).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (cmd == "say") {
      if (!args[0]) return bot.chat("Say what?");
      bot.chat(args.join(" "));
    }
  }
}
