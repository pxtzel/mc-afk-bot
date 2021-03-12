const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var mineflayer = require("mineflayer");
let joined = false;
var host = "localhost";
var port = 25565;
var username = "PeakBot";
var password = "";
var bota = mineflayer.createBot({
  host: host,
  port: port, // optional
  username: username,
  password: password,
});
events(bota);

function events(bot) {
  input(bot);
  function input(bot) {
    rl.question(":", function (name) {
      bot.chat(name);
      input(bot);
    });
  }
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

    bot.setControlState("jump", true);
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
      port: port,
      username: username,
      password: password,
    });
    console.log("Reconnected");
    events(bote);
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](2000);
    joined = true;
  });
}
