
const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "test",
    description: "shutdown the bot",

    async run(message, args, client) {

        const filter = (reaction, user) => {
            return reaction.emoji.name === '👍' && user.id === message.author.id;
        };
        
        const collector = message.createReactionCollector({ filter, time: 5000 });
        
        collector.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });
        message.reply("ID test").then(sent => { // 'sent' is that message you just sent
            var id = sent.id;
            console.log(id);
          });
        
          message.react('🇦');
          message.
        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    }
});
