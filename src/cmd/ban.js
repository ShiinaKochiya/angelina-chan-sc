const { Guild } = require("discord.js");
const Command = require("../structures/Command.js");
const { Permissions } = require('discord.js');

module.exports = new Command({
  name: 'ban',
  description: 'ban',
  async run(message, args, client) {
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS))
      return message.reply('You have no permission to ban members');

    if (!message.mentions.members)
      return message.reply('You need to mention a member to ban');

    let mentionedMember = message.mentions.members.first();
    var reason = args.slice(2).join(" ")

    try {
      mentionedMember.ban();
      if (reason === '') {message.reply(`Banned ${mentionedMember}`)} else {message.reply(`Banned ${mentionedMember} with reason: `+reason)}
    } catch (err) {
      console.log(err);
      message.reply(`Oops, there was an error banning ${mentionedMember}`);
    }
  },
});

