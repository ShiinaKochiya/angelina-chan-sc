const Command = require("../structures/Command.js");
const axios = require(`axios`);
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
    name: "urban",
    description: "urban dictionary",

    async run(message, args, client) {
        let wo = args.slice(1).join(" ");
        if(!wo) return message.reply('No word was given to define!')
        const answer = await axios.get(`https://api.urbandictionary.com/v0/define?term=${wo}`);
        if (answer.data.list.length === 0) return message.reply('There are no such word / expression')
        var def = trim(answer.data.list[1].definition);
        var exa = trim(answer.data.list[1].example);
        if (def === ""){def = "No definition found"}
        if (exa === ""){exa = "No example for this word(s)"}
        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle(`Urban Dictionary - ${wo}`)
        .setURL('https://www.youtube.com/watch?v=GJDNkVDGM_s')
        .setDescription(`Here's the top result definition for ${wo}:`)
        .setFields(
            { name: 'Definition:', value: def},
            { name: 'Example:', value: exa}
            )
            .setTimestamp()

        message.reply({embeds: [embed]})
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric"})
        console.log("[",time,"]",message.author.tag,`looked ${wo} up in the urban dictionary`);    

    }   

});


function trim(input){
  return input.length > 1024 ? `${input.slice(0,1020)}...` : input
}


