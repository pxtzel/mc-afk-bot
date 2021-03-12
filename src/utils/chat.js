module.exports = class Chat {
  constructor() {
    this.chat = (author, text) => {
      if (!author) author = "Player";
      console.log(`[${author}] ${text}`);
    };
  }
};
