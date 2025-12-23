const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "seggs",
    description: "Takashi go SEGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG",

    async run(message, args, client) {
      if (message.author.bot) return;
          message.channel.send({files: [{
            attachment: './src/cmd/wtf/sex.mp4',
            name: 'sex.mp4'
          }]})
          var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                   hour: "numeric",
                                                   minute: "numeric",
                                                   second: "numeric"})
          console.log("[",time,"]",message.author.tag,"used seggs");
    }
});
