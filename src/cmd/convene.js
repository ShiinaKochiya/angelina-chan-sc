const Command = require("../structures/Command.js");
const mergeImg = require('merge-img');
const { MessageEmbed } = require("discord.js");
const { getPity, updatePityCache } = require("../pitySchema.js");
const { naughtyList } = require("../naughtyList.js");
const cooldowns = new Map(); // Cooldown map to track user cooldowns
const charlist = require("../data/charlist_wuwa.json")
const { unlink } = require("node:fs")

module.exports = new Command({
    name: "convene",
    description: "PHOEBEEEEEEEEEE",

    async run(message, args, client) {
        const userId = message.author.id;

        if (cooldowns.has(userId)) {
            const remaining = (cooldowns.get(userId) - Date.now()) / 1000;
            if (remaining > 0) {
                return message.reply(`Please wait ${remaining.toFixed(1)} seconds before using this command again.`);
            }
        }

        cooldowns.set(userId, Date.now() + 1000);
        setTimeout(() => cooldowns.delete(userId), 1000);

        let convRes = [];
        let gacha = [];
        let actualPity = await getPity(userId);
        const maxStar3 = Math.max(...Object.keys(charlist.star3).map(Number));
        const maxStar4 = Math.max(...Object.keys(charlist.star4).map(Number));
        const maxStar5 = Math.max(...Object.keys(charlist.star5).map(Number));

        for (let i = 0; i < 10; i++) {
            var rate5 = 0.8;
            var rate4 = 6;

            if (actualPity.wuwaPity > 65 && actualPity.wuwaPity < 80) {
                rate5 = rate5 + 5.657 * (actualPity.wuwaPity - 65);
            } else if (actualPity.wuwaPity == 80) {
                rate5 = 100;
            } else if (actualPity.wuwaPity < 65) {
                rate5 = 0.8;
            }

            if (actualPity.wuwaPity == 80) {
                rate4 = 0;
            } else if (actualPity.wuwaPity4 > 8) {
                rate4 = 100 - rate5;
            }

            let rate3 = 100 - rate5 - rate4;
            let temp, temp2, path;
            var random = Math.floor(Math.random() * 100);
            if (random < rate3) {
                var result = Math.floor(Math.random() * maxStar3) + 1;
                temp = charlist.star3[result].res;
                temp2 = temp.replaceAll(" ", "_")
                path = temp2.replaceAll(":", "");
                gacha[i] = `./src/data/wuwa/3star/${path}.png`
                convRes[i] = charlist.star3[result].res;
                actualPity.wuwaPity++;
                actualPity.wuwaPity4++;
            } else if (random < (rate3 + rate4)) {
                var result = Math.floor(Math.random() * maxStar4) + 1;
                temp = charlist.star4[result].res;
                temp2 = temp.replaceAll(" ", "_")
                path = temp2.replaceAll(":", "");
                gacha[i] = `./src/data/wuwa/4star/${path}.png`
                convRes[i] = charlist.star4[result].res;
                actualPity.wuwaPity++;
                actualPity.wuwaPity4 = 0;
            } else {
                var result = Math.floor(Math.random() * maxStar5) + 1;
                temp = charlist.star5[result].res;
                temp2 = temp.replaceAll(" ", "_")
                path = temp2.replaceAll(":", "");
                gacha[i] = `./src/data/wuwa/5star/${path}.png`
                convRes[i] = `**${charlist.star5[result].res}**`;
                actualPity.wuwaPity = 0;
                actualPity.wuwaPity4 = 0;
            }
        }

        mergeImg(gacha).then((img) => img.write(`./src/data/wuwa/${userId}.png`))
        const embed = new MessageEmbed()
            .setColor("#8F8F8F")
            .setTitle(`Convene result:`)
            .setURL("https://youtu.be/dQw4w9WgXcQ")
            .setDescription(
                `Result:\n${convRes.join("\n")}\n\nCurrent pity: ${actualPity.wuwaPity}`
            );

            
            
        setTimeout(function () {
            message.channel.send({ embeds: [embed] });
            message.reply({ files: [`./src/data/wuwa/${userId}.png`] })
                .then(() => unlink(`./src/data/wuwa/${userId}.png`, (err) => {
                    if (err) throw err;
                    console.log('gone');
                }))
        }, 1000);


        updatePityCache(userId, {
            arknightsPity: actualPity.arknightsPity,
            wuwaPity4: actualPity.wuwaPity4,
            wuwaPity: actualPity.wuwaPity,
        });
    }
});
