
const Command = require("../structures/Command.js");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "snipe",
    description: "setting pity for the headhunt cmd",
    alias: [""],

    async run(message, args, client) {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("There's nothing to snipe!")
        const id = msg.author.id
        console.log(msg.content);
        console.log(id);
        console.log(msg.author.username);
        console.log(msg.image);
        console.log();
        console.log();

        usrname = msg.author.username;
        cnt = msg.content;

        const embed = new MessageEmbed()
        .setAuthor(usrname)
        .setDescription(cnt)
        if(msg.image)embed
        .setImage(msg.image)
        .setColor("00FFFF")
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})

    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"})
        if (msg.image) console.log("[",time,"]", message.author.tag,"used the time machine, sniped the following:", cnt, " | ", msg.image); else console.log("[",time,"]", message.author.tag,"used the time machine, sniped the following:", cnt)
    }
});
