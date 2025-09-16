const Command = require("../structures/Command.js");
const {MessageEmbed} = require('discord.js')
const pityTable = require('../data/pity.json');
const charList = require('../data/op_list.json');
const mongoose = require("../mongoose.js")
const schema = require("../schema.js")

module.exports = new Command({
    name: "headhunt",
    alias: ["gacha"],
    description: "headhunt time",

    async run(message, args, client) {
        //console.log(message.author.tag,"used a!gacha")
        var banner = args.slice(1).join(" ").toLowerCase();
        // var banner = "standard";
        if (banner === "angelina"){var banner = "angie"}
        if (banner === "ange"){var banner = "angie"}
        //if (banner == "all6"){var banner="6star"}
        var i = 0;
        var lim = 10;
        if (banner == "100"){lim = 100}
        let op = [];
        
        
        const userPity = await schema.findOne({userID: message.author.id}).exec();
        
        if (!userPity){
            const userPityNew = new schema(
                {
                    "userID": message.author.id,
                    "wuwaPity": 0,
                    "arknightsPity": 0
                });
            await userPityNew.save();

        }

        const actualPity = await schema.findOne({userID: message.author.id}).exec();
        
        

        
        
        while (i<lim){
        var numba = Math.floor(Math.random() * 100)+1;
        if(banner == "angie" || banner == "ø"){numba = 100}
        //console.log(rate3, rate4, rate5, rate6)
        if(actualPity.arknightsPity>50){
            var rate3 = pityTable[actualPity.arknightsPity].rate3;
            var rate4 = pityTable[actualPity.arknightsPity].rate4;
            var rate5 = pityTable[actualPity.arknightsPity].rate5;
            var rate6 = pityTable[actualPity.arknightsPity].rate6;
        } else {
            var rate3 = pityTable.default.rate3;
            var rate4 = pityTable.default.rate4;
            var rate5 = pityTable.default.rate5;
            var rate6 = pityTable.default.rate6;
        }
            //3 stars
            if (numba < rate3){
                var result = Math.floor(Math.random() * 17)+1;
                actualPity.arknightsPity = actualPity.arknightsPity + 1;
                var newLength = op.push(charList.star3[result].opName)
            } //4 stars
                else if (numba < (rate3 + rate4)){
                    var result = Math.floor(Math.random() * 47)+1;
                    actualPity.arknightsPity = actualPity.arknightsPity + 1;
                    var newLength = op.push(charList.star4[result].opName)
            } //5 stars
                else if (numba < (rate3+rate4+rate5)){
                    actualPity.arknightsPity = actualPity.arknightsPity + 1;
                    var result = Math.floor(Math.random() * 94)+1;
                    var newLength = op.push(charList.star5[result].opName)
                } // 6 stars
                else {
                    var result = Math.floor(Math.random() * 69)+1;
                    actualPity.arknightsPity = 0;
                    
                    if(banner == "angie"){var newLength = op.push(charList.star6[8].opName)} else
                    {
                        if (banner == "ø") console.log("6 star ID:", result)
                        var newLength = op.push(charList.star6[result].opName)

                    }
                }
        
    i = i + 1

    }
    //message.reply(`Result:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n${op[10]}`)  
    if (actualPity.arknightsPity > 50) {rate6 = rate6 + 2};

    if (banner == "angie"){
        var finalPity = "Angelina";
        var finalRate = "Angelina";
    } else {    
        var finalPity = actualPity.arknightsPity;
        var finalRate = rate6;
    }
    if (banner !== "100"){
    const embed = new MessageEmbed()
        .setColor('#8F8F8F')
        .setTitle('Headhunt result')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`Result:\n${op[0]}\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n\nCurrent pity: ${finalPity}\n6star rate: ${finalRate}`

        )
        //.setImage('https://cdn.discordapp.com/emojis/839892689637998612.webp?size=48')
    
        message.channel.send({embeds: [embed]}); } else {
            const embed = new MessageEmbed()
        .setColor('#8F8F8F')
        .setTitle('Headhunt result (100 rolls)')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`Result:\n${op[0]}\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}
            \n${op[10]}\n${op[11]}\n${op[12]}\n${op[13]}\n${op[14]}\n${op[15]}\n${op[16]}\n${op[17]}\n${op[18]}\n${op[19]}
            \n${op[20]}\n${op[21]}\n${op[22]}\n${op[23]}\n${op[24]}\n${op[25]}\n${op[26]}\n${op[27]}\n${op[28]}\n${op[29]}
            \n${op[30]}\n${op[31]}\n${op[32]}\n${op[33]}\n${op[34]}\n${op[35]}\n${op[36]}\n${op[37]}\n${op[38]}\n${op[39]}
            \n${op[40]}\n${op[41]}\n${op[42]}\n${op[43]}\n${op[44]}\n${op[45]}\n${op[46]}\n${op[47]}\n${op[48]}\n${op[49]}
            \n${op[50]}\n${op[51]}\n${op[52]}\n${op[53]}\n${op[54]}\n${op[55]}\n${op[56]}\n${op[57]}\n${op[58]}\n${op[59]}
            \n${op[60]}\n${op[61]}\n${op[62]}\n${op[63]}\n${op[64]}\n${op[65]}\n${op[66]}\n${op[67]}\n${op[68]}\n${op[69]}
            \n${op[70]}\n${op[71]}\n${op[72]}\n${op[73]}\n${op[74]}\n${op[75]}\n${op[76]}\n${op[77]}\n${op[78]}\n${op[79]}
            \n${op[80]}\n${op[81]}\n${op[82]}\n${op[83]}\n${op[84]}\n${op[85]}\n${op[86]}\n${op[87]}\n${op[88]}\n${op[89]}
            \n${op[90]}\n${op[91]}\n${op[92]}\n${op[93]}\n${op[94]}\n${op[95]}\n${op[96]}\n${op[97]}\n${op[98]}\n${op[99]}
            \n\nCurrent pity: ${finalPity}\n6star rate: ${finalRate}`

        )
        //.setImage('https://cdn.discordapp.com/emojis/839892689637998612.webp?size=48')
    
        message.channel.send({embeds: [embed]});
        }
    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"})
    console.log("[",time,"]", message.author.tag,"wanted to gamble")
    console.log(actualPity.arknightsPity)
    await actualPity.save(); //Move this to wherever the headhunt is done
    //message.reply(`Test statement: Op 6 star no. 15 is ${charList.star6[15].opName} and pity at roll 83 has the rate of ${pityTable[83].rate6}`)
  }
});


/**\
 * list need to do:
 * 1. add mongo
 * 2. convert old pity to new
 * 3. uhh idk
 */