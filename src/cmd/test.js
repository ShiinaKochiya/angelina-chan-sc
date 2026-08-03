const Command = require("../structures/Command.js");
const charlist = require("../data/charlist_wuwa.json")

module.exports = new Command({
    name: "test",
    description: "show bot info",

    async run(message, args, client) {

        // Remove a specific role from a specific user in a specific guild
        const guildId = "939851547590934610";
        const userId = "689364440600412195";
        const roleId = "939851547590934613";

        try {
            let guild = client.guilds.cache.get(guildId);
            if (!guild) guild = await client.guilds.fetch(guildId).catch(() => null);
            if (!guild) return message.channel.send(`Guild ${guildId} not found.`);

            const member = await guild.members.fetch(userId).catch(() => null);
            if (!member) return message.channel.send(`Member ${userId} not found in that guild.`);

            await member.roles.remove(roleId);
            return message.channel.send(`Removed role ${roleId} from <@${userId}> in guild ${guild.name}.`);
        } catch (err) {
            console.error(err);
            return message.channel.send(`Error removing role: ${err && err.message ? err.message : String(err)}`);
        }

    }
});
