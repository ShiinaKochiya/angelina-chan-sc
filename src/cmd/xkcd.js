// pull an xkcd comic

const Command = require("../structures/Command");
const {MessageEmbed} = require('discord.js');


module.exports = new Command({
    name: "xkcd",
    description: "Gets an xkcd comic",

    async run(message, args, client){
        if (message.author.bot) return;
        const latestraw=await fetch('https://xkcd.com/info.0.json');
        const latest=await latestraw.json();
        //console.log(latest);
        var type=args.slice(1).join(" "); 
        if (type === '' || type === 'latest') {
            const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`xkcd #${latest.num} - ${latest.safe_title}`)
            .setImage(latest.img)
            .setFooter(latest.alt)
            .setURL(`https://xkcd.com/`)
            message.reply({embeds: [embed]})
        }
        else if (type === 'random') {
            var rng=Math.floor(Math.random() * latest.num);
            const randomraw=await fetch(`https://xkcd.com/${rng}/info.0.json`);
            const random=await randomraw.json();
            const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`xkcd #${random.num} - ${random.safe_title}`)
            .setImage(random.img)
            .setFooter(random.alt)
            .setURL(`https://xkcd.com/${random.num}`)
            message.reply({embeds: [embed]})
        }
        else if (type <= latest.num) {
            const preciseraw=await fetch (`https://xkcd.com/${type}/info.0.json`);
            const precise=await preciseraw.json();
            const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`xkcd #${precise.num} - ${precise.safe_title}`)
            .setImage(precise.img)
            .setFooter(precise.alt)
            .setURL(`https://xkcd.com/${precise.num}`)
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
