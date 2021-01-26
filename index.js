// OSX:
// - have nodejs (default works on OSX)
// - npm install mineflayer
// - edit this script, set server, change port if not default
// - username/pass are minecraft login email address + password
//
// set moveinterval to number of seconds between movements. This is also movement duration.
//
// - Log in using normal client, empty inventory (optional), put food in first inventory slot
// - Go to a safe area (inside, well lighted)
// - Log out of normal minecraft
// - Start this script and wait (preferably use normal IP, running remove often doesn't work):
// node minecraft_idlebot.js

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
  bot.on("time", function () {
    var yaw = Math.random() * pi - 0.5 * pi;
    var pitch = Math.random() * pi - 0.5 * pi;
    bot.look(yaw, pitch, false);
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
  });
  bot.on("end", async () => {
    console.log("Disconnected.");
    joined = false;
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);
    bot.quit();
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
