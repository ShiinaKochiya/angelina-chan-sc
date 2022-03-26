const Command = require("../structures/Command.js");
const axios = require(`axios`);
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
    name: "item",
    description: "items in ak?",

    async run(message, args, client) {
        const { data: {items}} = await axios.get(`https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/item_table.json`);

        const [ faq ] = items;

        var exam = faq.SOCIAL_PT;

        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Arknights item')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        //.setDescription(`Definition for ${wo}`)
        .setFields(
            { name: 'example:', value: exam}
            )
            .setTimestamp()

        message.reply({embeds: [embed]})
        

    }   

});


function trim(input){
  return input.length > 1024 ? `${input.slice(0,1020)}...` : input
}


