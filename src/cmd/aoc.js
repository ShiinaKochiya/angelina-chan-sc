const Command = require("../structures/Command.js");
const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
    name: "aoc",
    description: "its le advent of code",

    async run(message, args, client) {
        try {
            const res = await axios.get(
                "https://adventofcode.com/2025/leaderboard/private/view/2129913.json",
                {
                    headers: {
                        Cookie: `session=${process.env.AOC_SESSION}`,
                        "User-Agent": "discord-bot-aoc (contact: yourname)"
                    }
                }
            );

            const data = res.data;
            const members = res.data.members;

       const leaderboard = Object.values(members)
        .map(m => ({
            name: m.name ?? "(anonymous)",
            stars: m.stars
        }))
        .sort((a, b) => b.stars - a.stars);
        
        const description = leaderboard
            .map((m, i) => `**${i + 1}.** ${m.name} — ⭐ ${m.stars}`)
            .join("\n");

        const embed = new MessageEmbed()
            .setColor("#8F8F8F")
            .setTitle("AoC Leaderboard")
            .setURL("https://adventofcode.com/2025/leaderboard/private/view/2129913")
            .setDescription(description);

message.channel.send({ embeds: [embed] });

        } catch (err) {
            console.error("AoC fetch failed:", err.response?.status, err.message);
        }
    }
});
