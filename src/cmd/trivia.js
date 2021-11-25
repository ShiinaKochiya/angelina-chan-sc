const { MessageActionRow, MessageComponentInteraction } = require("discord.js");
const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "trivia",
    description: "random trivia about Arknights",

    async run(message, args, client) {

        var number = Math.floor(Math.random() * 1) +1;
        if (number === 1){
            
            const row = new MessageActionRow.addComponent(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);
            await MsgInt.reply({
                content: 'A',
                components: [row]
            })
        }
    }
});
