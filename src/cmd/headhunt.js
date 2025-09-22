const Command = require("../structures/Command.js");
const { MessageEmbed } = require("discord.js");
const pityTable = require("../data/pity.json");
const charList = require("../data/op_list.json");
const { getPity, updatePity } = require("../pitySchema.js");

const cooldowns = new Map();

module.exports = new Command({
  name: "headhunt",
  alias: ["gacha"],
  description: "headhunt time",

  async run(message, args, client) {
    const userId = message.author.id;
    const now = Date.now();
    const lastUsed = cooldowns.get(userId) || 0;
    if (now - lastUsed < 1000) {
      return message.reply("Please wait 1 second before using this command again.");
    }
    cooldowns.set(userId, now);

    let banner = args.slice(1).join(" ").toLowerCase();
    if (banner === "angelina") banner = "angie";
    if (banner === "ange") banner = "angie";

    let i = 0;
    let lim = banner === "100" ? 100 : 10;
    let op = [];

    let actualPity = await getPity(message.author.id);

    while (i < lim) {
      let numba = Math.floor(Math.random() * 100) + 1;
      if (banner === "angie" || banner === "ø") numba = 100;

      let rate3, rate4, rate5, rate6;
      if (actualPity.arknightsPity > 50) {
        rate3 = pityTable[actualPity.arknightsPity].rate3;
        rate4 = pityTable[actualPity.arknightsPity].rate4;
        rate5 = pityTable[actualPity.arknightsPity].rate5;
        rate6 = pityTable[actualPity.arknightsPity].rate6;
      } else {
        rate3 = pityTable.default.rate3;
        rate4 = pityTable.default.rate4;
        rate5 = pityTable.default.rate5;
        rate6 = pityTable.default.rate6;
      }

      if (numba < rate3) {
        const result = Math.floor(Math.random() * 17) + 1;
        actualPity.arknightsPity++;
        op.push(charList.star3[result].opName);
      } else if (numba < rate3 + rate4) {
        const result = Math.floor(Math.random() * 47) + 1;
        actualPity.arknightsPity++;
        op.push(charList.star4[result].opName);
      } else if (numba < rate3 + rate4 + rate5) {
        const result = Math.floor(Math.random() * 94) + 1;
        actualPity.arknightsPity++;
        op.push(charList.star5[result].opName);
      } else {
        const result = Math.floor(Math.random() * 69) + 1;
        actualPity.arknightsPity = 0;

        if (banner === "angie") {
          op.push(charList.star6[8].opName);
        } else {
          if (banner === "ø") console.log("6 star ID:", result);
          op.push(charList.star6[result].opName);
        }
      }

      i++;
    }

    if (actualPity.arknightsPity > 50) {
      var rate6 = pityTable[actualPity.arknightsPity].rate6 + 2;
    } else {rate6 = 2}

    const finalPity = banner === "angie" ? "Angelina" : actualPity.arknightsPity;
    const finalRate = banner === "angie" ? "Angelina" : rate6;

    const embed = new MessageEmbed()
      .setColor("#8F8F8F")
      .setTitle(`Headhunt result${banner === "100" ? " (100 rolls)" : ""}`)
      .setURL("https://youtu.be/dQw4w9WgXcQ")
      .setDescription(
        `Result:\n${op.join("\n")}\n\nCurrent pity: ${finalPity}\n6star rate: ${finalRate}`
      );

    message.channel.send({ embeds: [embed] });

    // save pity updates via Prisma
    await updatePity(message.author.id, { arknightsPity: actualPity.arknightsPity });

    const time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    console.log("[", time, "]", message.author.tag, "wanted to gamble");
  },
});

/**\
 * list need to do:
 * 1. add mongo - Changed to maria instead
 * 2. convert old pity to new
 * 3. uhh idk
 */