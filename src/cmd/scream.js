const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "scream",
    description: "everyone screaming",

    async run(message, args, client) {
      if (message.author.bot) return;
        var numba = Math.floor(Math.random() * 10) + 1;
          message.channel.send({files: [{
            attachment: `./src/data/scream/${numba}.mp4`,
            name: `${numba}.mp4`
          }]});
          if (numba === 9) {message.channel.send('this is not even a scream smh')}
          var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                   hour: "numeric",
                                                   minute: "numeric",
                                                   second: "numeric"})
          console.log("[",time,"]",message.author.tag,"used scream (custom log out here)");
    }
});
