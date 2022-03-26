const { Guild } = require("discord.js");
const Command = require("../structures/Command.js");
const { Permissions } = require("discord.js");
const config = require("../data/config.json");
module.exports = new Command({
  name: "lock",
  description: "lock the channel that the command is exucuted",

  //clm sao còn làm code????? Lo ôn Sử đi ngày kia thì r clm đừng code nữa, yamete kudastop

  async run(message, args, client) {
    if (message.author.bot) return;
    var id = args.slice(1).join(" ");
    if (id === ``) {
      var id = message.channelId;
    }
    if (message.member.roles.cache.some(role => config.adminRoles.includes(role.id))) {
      client.channels.cache
        .get(id)
        .permissionOverwrites.edit(message.guild.roles.everyone.id, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: false,
          READ_MESSAGE_HISTORY: true,
          ATTACH_FILES: false,
        });
        message.reply(`channel unlocked :ok_hand:`)      
    } else
      message.reply(
        `why do you want to use a mod command when you're not a mod`
      );
  },
});
