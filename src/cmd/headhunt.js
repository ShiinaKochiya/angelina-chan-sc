const Command = require("../structures/Command.js");
const {MessageEmbed} = require('discord.js')
const pityTable = require('../data/pity.json');
const charList = require('../data/op_list.json');


module.exports = new Command({
    name: "headhunt",
    alias: ["gacha"],
    description: "headhunt time",

    async run(message, args, client) {
        //console.log(message.author.tag,"used a!gacha")
        var banner = args.slice(1).join(" ").toLowerCase();
        // var banner = "standard";
        if (banner === ""){var banner = "standard"}
        if (banner === "e"){var banner = "event"}
        var i = 0;
        let op = [];
        pityIndex = message.author.id % 1000000000;
        if (global.userPity[pityIndex] == undefined){global.userPity[pityIndex] = 0};

        while (i<10){
        var numba = Math.floor(Math.random() * 100)+1;
        
        //console.log(rate3, rate4, rate5, rate6)
        if(global.userPity[pityIndex]>51){
            var rate3 = pityTable[global.userPity[pityIndex]].rate3;
            var rate4 = pityTable[global.userPity[pityIndex]].rate4;
            var rate5 = pityTable[global.userPity[pityIndex]].rate5;
            var rate6 = pityTable[global.userPity[pityIndex]].rate6;
        } else {
            var rate3 = pityTable.default.rate3;
            var rate4 = pityTable.default.rate4;
            var rate5 = pityTable.default.rate5;
            var rate6 = pityTable.default.rate6;
        }
            //3 stars
            if (numba < rate3){
                var result = Math.floor(Math.random() * 17)+1;
                global.userPity[pityIndex] = global.userPity[pityIndex] + 1;
                var newLength = op.push(charList.star3[result].opName)
            } //4 stars
                else if (numba < (rate3 + rate4)){
                    var result = Math.floor(Math.random() * 47)+1;
                    global.userPity[pityIndex] = global.userPity[pityIndex] + 1;
                    var newLength = op.push(charList.star4[result].opName)
            } //5 stars
                else if (numba < (rate3+rate4+rate5)){
                    global.userPity[pityIndex] = global.userPity[pityIndex] + 1;
                    var result = Math.floor(Math.random() * 94)+1;
                    var newLength = op.push(charList.star5[result].opName)
                } // 6 stars
                else {
                    var result = Math.floor(Math.random() * 69)+1;
                    global.userPity[pityIndex] = 0;
                    var newLength = op.push(charList.star6[result].opName)
                }
        
    i = i + 1

    }
    //message.reply(`Result:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n${op[10]}`)  
    if (global.userPity[pityIndex] > 50) {rate6 = rate6 + 2};;
    const embed = new MessageEmbed()
        .setColor('#8F8F8F')
        .setTitle('Headhunt result')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`Result:\n${op[0]}\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n\nCurrent pity: ${global.userPity[pityIndex]}\n6star rate: ${rate6}`)
        //.setImage('https://cdn.discordapp.com/emojis/839892689637998612.webp?size=48')
    message.channel.send({embeds: [embed]})
    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"})
    console.log("[",time,"]", message.author.tag,"wanted to gamble")
    //message.reply(`Test statement: Op 6 star no. 15 is ${charList.star6[15].opName} and pity at roll 83 has the rate of ${pityTable[83].rate6}`)
  }
});