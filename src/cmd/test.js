
const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "test",
    description: "shutdown the bot",

    async run(message, args, client) {

        const filter = (reaction, user) => {
            return reaction.emoji.name === '🇦' && user.id === message.author.id
        };
        const filter2 = (reaction, user) => {
            return reaction.emoji.name === '🇧' && user.id === message.author.id
        };
        const filter3 = (reaction, user) => {
            return reaction.emoji.name === '🇨' && user.id === message.author.id
        };
        const collector = message.createReactionCollector({ filter, time: 15000 });
        const collector2 = message.createReactionCollector({ filter2, time: 15000 });
        const collector3 = message.createReactionCollector({ filter3, time: 15000 });
        collector.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });
        collector2.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });
        collector3.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });
    //    message.reply("ID test").then(sent => { // 'sent' is that message you just sent
    //      var id = sent.id;
    //    console.log(id);
    //    }).then(message.react('🇦'))
    
    message.channel.send("test").then(msg=> { 
        msg.react("🇦").then 
        msg.react("🇧").then
        msg.react("🇨")
    }).catch();
    
    


        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    }
});

// smh I hate this ._.