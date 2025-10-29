const Command = require("../structures/Command.js");
const { MessageEmbed } = require("discord.js");
const pityTable = require("../data/pity.json");
const charList = require("../data/op_list.json");
const { getPity, updatePityCache } = require("../pitySchema.js");
const { naughtyList } = require("../naughtyList.js");
const cooldowns = new Map();

module.exports = new Command({
  name: "headhunt",
  alias: ["gacha"],
  description: "headhunt time",

  async run(message, args, client) {
  const maxStar3 = Math.max(...Object.keys(charList.star3).map(Number));
  const maxStar4 = Math.max(...Object.keys(charList.star4).map(Number));
  const maxStar5 = Math.max(...Object.keys(charList.star5).map(Number));
  const maxStar6 = Math.max(...Object.keys(charList.star6).map(Number));
  const userId = message.author.id;

    let banner = args.slice(1).join(" ").toLowerCase();
    if (banner === "angelina") banner = "angie";
    if (banner === "ange") banner = "angie";

    let i = 0;
    let lim = banner === "100" ? 100 : 10;
    let op = [];

    let actualPity = await getPity(userId);

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
        const result = Math.floor(Math.random() * maxStar3) + 1;
        actualPity.arknightsPity++;
        op.push(charList.star3[result].opName);
      } else if (numba < rate3 + rate4) {
        const result = Math.floor(Math.random() * maxStar4) + 1;
        actualPity.arknightsPity++;
        op.push(charList.star4[result].opName);
      } else if (numba < rate3 + rate4 + rate5) {
        const result = Math.floor(Math.random() * maxStar5) + 1;
        actualPity.arknightsPity++;
        op.push(charList.star5[result].opName);
      } else {
        const result = Math.floor(Math.random() * maxStar6) + 1;
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
    } else {
      rate6 = 2;
    }

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

    updatePityCache(userId, {
        arknightsPity: actualPity.arknightsPity, 
        wuwaPity4: actualPity.wuwaPity4,
        wuwaPity: actualPity.wuwaPity,
    });

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