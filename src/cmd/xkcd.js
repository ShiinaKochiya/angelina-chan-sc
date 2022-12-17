// pull an xkcd comic

const Command = require("../structures/Command");
const {MessageEmbed} = require('discord.js');
const axios = require(`axios`);

module.exports = new Command({
    name: "xkcd",
    description: "Gets an xkcd comic",

    async run(message, args, client){
        if (message.author.bot) return;
        const latest =  await axios.get(`https://xkcd.com/info.0.json`);
        var type=args.slice(1).join(" "); 
        if (type === '' || type === 'latest') {
            const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`xkcd #${latest.data.num} - ${latest.data.safe_title}`)
            .setImage(latest.data.img)
            .setFooter(latest.data.alt)
            .setURL(`https://xkcd.com/`)
            message.reply({embeds: [embed]})
        }
        else if (type === 'random') {
            var rng=Math.floor(Math.random() * latest.data.num);
            const random =  await axios.get(`https://xkcd.com/${rng}/info.0.json`);
            const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`xkcd #${random.data.num} - ${random.data.safe_title}`)
            .setImage(random.data.img)
            .setFooter(random.data.alt)
            .setURL(`https://xkcd.com/${random.data.num}`)
            message.reply({embeds: [embed]})
        }
        else if (type <= latest.data.num) {
            const precise=await axios.get (`https://xkcd.com/${type}/info.0.json`);
            const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`xkcd #${precise.data.num} - ${precise.data.safe_title}`)
            .setImage(precise.data.img)
            .setFooter(precise.data.alt)
            .setURL(`https://xkcd.com/${precise.data.num}`)
            message.reply({embeds: [embed]})
        }
        else message.reply(`Please check your input. Options are latest, random or specific number.`);
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric"})
        console.log("[",time,"]",message.author.tag,`wanted to look at some xkcd`);    
    }
})
