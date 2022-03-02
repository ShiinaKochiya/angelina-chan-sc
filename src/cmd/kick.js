const { Guild } = require("discord.js");
const Command = require("../structures/Command.js");
const { Permissions } = require('discord.js');
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
  name: 'kick',
  description: 'kick',
  async run(message, args, client) {
    if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS))
      return message.reply('You have no permission to kick members');

    if (!message.mentions.members)
      return message.reply('You need to mention a member to kick');

    let mentionedMember = message.mentions.members.first();

    try {
      mentionedMember.kick();
      const embed = new MessageEmbed()
    .setColor(`#FFFE2A`)
    .setFields({ name: `${mentionedMember} was kicked!`, value: 'What a bad member'},)
    .setTimestamp();
      message.reply({embeds: [embed]});
      var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                               hour: "numeric",
                                               minute: "numeric",
                                               second: "numeric"})
      console.log("[",time,"]", message.author.tag,`kicked ${mentionedMember}`)
    } catch (err) {
      console.log(err);
      message.reply(`Oops, there was an error kicking ${mentionedMember}`);
    }
  },
});
