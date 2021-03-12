module.exports = (bot) => {
  const player = bot.nearestEntity();

  if (!player || player.type !== "player") return;
  const pos = player.position.offset(0, player.height, 0);
  bot.lookAt(pos);
};
