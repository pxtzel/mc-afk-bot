const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const app = require("express")();

const bodyParser = require("body-parser");
const porte = 5472;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(porte, () => {
  console.log(`Command get on http://localhost:${porte}`);
});
var mineflayer = require("mineflayer");
let joined = false;
var host = "mc.dantoast.xyz";
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
app.get("/chat", (req, res) => {
  if (!bota) return res.send("Bot offline");
  if (!req.query.txt) return res.send("No text");
  bota.chat(req.query.txt);

  res.send("OK");
});
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
