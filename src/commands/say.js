module.exports = {
  name: "say",
  run: (message, args, bot) => {
    bot.chat(args.join(" "));
  },
};
