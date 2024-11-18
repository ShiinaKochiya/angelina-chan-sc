const Command = require("../../structures/Command.js");

module.exports = new Command({
    name: "wtf",
    description: "wtf?",

    async run(message, args, client) {
      if (message.author.bot) return;
          message.channel.send({files: [{
            attachment: './src/cmd/wtf/btmc.mp4',
            name: 'btmc.mp4'
          }]})
    }   
});
