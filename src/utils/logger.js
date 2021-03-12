const chalk = require("chalk");
module.exports = class Logger {
  constructor(prefix) {
    if (!prefix) prefix = "Logger";
    this.log = (text) => {
      console.log(`[${prefix}]`, chalk.white(text));
    };
    this.success = (text) => {
      console.log(`[${prefix}]`, chalk.green(text));
    };
    this.error = (text) => {
      console.log(`[${prefix}]`, chalk.red(text));
    };
    this.warn = (text) => {
      console.log(`[${prefix}]`, chalk.yellow(text));
    };
  }
};
