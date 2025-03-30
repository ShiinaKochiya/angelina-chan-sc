const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "nuke",
    description: "Delete bulk messages",

    async run(message, args, client) {
      var arg = args.slice(1).join(" ").toLowerCase();
      
    if(!isNaN(arg)){  
      var lim = Number(arg)
      if (lim<99 && lim > 1){  
          async function clear() {
            message.delete();
            const channelID = message.channel.id;
            //const fetched = await message.fetch({limit: 5});
            client.channels.cache.get(channelID).bulkDelete(lim + 1);
            }
          clear();
      } else message.reply("Invalid nuke parameter, delete number must be from 1 to 99")
    }

    }
});
