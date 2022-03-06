const Command = require("../structures/Command.js");
const axios = require(`axios`);
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
    name: "urban",
    description: "urban dictionary",

    async run(message, args, client) {
        let wo = args.slice(1).join(" ");
        if(!wo) return message.reply('No word was given to define!')

        var obj = encodeURIComponent(wo);

        const { data: {list}} = await axios.get(`https://api.urbandictionary.com/v0/define?term=${obj}`);

        const [ answer ] = list;

        if (list.length === 0) return message.reply('Word not found')

        var def = trim(answer.definition);
        var exa = trim(answer.example);

        if (def === ""){def = "No definition found"}
        if (exa === ""){exa = "No example for this word"}
        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Urban Dictionary')
        .setURL('https://youtu.be/dQw4w9WgXcQ') //wait wtf ur rickrolling or sth lol
        .setDescription(`Definition for ${wo}`)
        .setFields(
            { name: 'definition:', value: def},
            { name: 'example:', value: exa}
            )
            .setTimestamp()

        message.reply({embeds: [embed]})
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]",message.author.tag,`looked up "${wo}" on the Urban Dictionary`);

    }

});


function trim(input){
  return input.length > 1024 ? `${input.slice(0,1020)}...` : input
}
