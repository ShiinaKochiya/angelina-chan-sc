const { Guild } = require("discord.js");
const Command = require("../structures/Command.js");
const { Permissions } = require('discord.js');
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
  name: 'timeout',
  description: 'timeout',
  async run(message, args, client) {
    if (!message.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS))
      return message.reply('You have no permission to timeout members');

    /*if (!client.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS))
      return message.reply(`I'm currently missing permission to timeout members!\n Please make sure that I have the following permission enabled\nhttps://media.discordapp.net/attachments/972429032211763220/983033006761598996/unknown.png`);*/

    if (!message.mentions.members)
      return message.reply('You need to mention a member to timeout');

    let mentionedMember = message.mentions.members.first();
    let ayaya = args.slice(2).join(" ");
    var reason = args.slice(3).join(" ");
    var l = ayaya.length;
    var l2 = reason.length;
    var duration = ayaya.substr(0, l-l2);
    if (duration === ""){var duration = 5}
    if (reason === ""){var reason = "Not provided"}
    if (!isNaN(duration)) {var valid = true} else {
        var valid = false;
        message.reply("You didn't give me a valid duration (Everything is counted in minutes)")
    }
    try {
    if(valid === true){
      mentionedMember.timeout(duration * 60 * 1000);
      const embed = new MessageEmbed()
    .setColor(`#FFFE2A`)
    .setFields({ name: `${mentionedMember} was timed out for ${duration} minutues`, value: `Reason: ${reason}`},)
    .setTimestamp();
      message.reply({embeds: [embed]});
    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"})
    console.log("[",time,"]", message.author.tag,`time-out'ed ${mentionedMember}`)
    }
    } catch (err) {
      console.log(err);
      message.reply(`Oops, there was an error timing-out ${mentionedMember}`);
    }
  },
});

