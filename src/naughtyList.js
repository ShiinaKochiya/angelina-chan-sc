const { flushPityCache } = require("./pitySchema");

// every 1s flush the whole cache
setInterval(() => {
  flushPityCache();
}, 1000); //delay is here


module.exports = {};
