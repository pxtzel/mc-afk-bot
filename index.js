const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var mineflayer = require("mineflayer");
let joined = false;
var host = "peaklime.aternos.me";
var port = 25565;
var username = "PeakBot";
var password = "";
// code start
var bota = mineflayer.createBot({
  host: host,
  port: port, // optional
  username: username,
  password: password,
});
var pi = 3.14159;
events(bota);
function events(bot) {
  function input(bot) {
    rl.question(":", function (name) {
      bot.chat(name);
      input(bot);
    });
  }
  bot.on("time", function () {
    var yaw = Math.random() * pi - 0.5 * pi;
    var pitch = Math.random() * pi - 0.5 * pi;
    bot.look(yaw, pitch, false);
  });
  bot.on("chat", (user, message) => {
    if (user == username) return;
    console.log(message);
  });
  bot.on("playerJoined", (player) => {
    if (!joined) return;
    if (player.username == username) return;
    let name = player.username;
    bot.chat("Hey " + name + "!");
  });
  bot.on("playerLeft", (player) => {
    if (player.username == username) return;
    let name = player.username;
    bot.chat("Bye " + name);
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
    bot = mineflayer.createBot({
      host: host,
      port: port, // optional
      username: username,
      password: password,
    });
    console.log("reconnected.");
    events(bot);
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);
    joined = true;
  });
}
