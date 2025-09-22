const Command = require("../structures/Command.js");
const mergeImg = require('merge-img');
const sharp = require("sharp")

module.exports = new Command({
    name: "convene",
    description: "PHOEBEEEEEEEEEE",

    async run(message, args, client) {

        var arg = args.slice(1).join(" ").toLowerCase();

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
        actualPity.wuwaPity++;
        await actualPity.save();

        console.log(actualPity.wuwaPity)
        if (arg == ""){
            const charlist = ['brat', 'camel', 'canta', 'cartwheel', 'changli', 'charcoal', 'cocacola', 'desuwa', 'encore', 'jian', 'jingshi', 'jiyan', 'lingyang', 'lupo', 'pheb', 'roccia', 'shore', 'verina', 'xiangli', 'yinlin', 'zani', 'zhezhi']
            let gacha = []
            for (let i = 0; i<10; i++){
                var random = Math.floor(Math.random() * charlist.length);
                gacha[i] = `./src/data/wuwa/${charlist[random]}.png`
            }
            mergeImg(gacha).then((img) => img.write('./src/data/wuwa/out.png'))
            message.channel.send("Database and pity systems is under construction! Enjoy unlimted 5 star Convene for the mean time with all Resonators in the pool. You can check for *not really* accurate pity (no its not, it is based on player data) percentage by using `a!convene <number of rolls>`")
            sharp('./src/data/wuwa/out.png')
              .resize({ width: 960 })
              .toFile('./src/data/wuwa/output.png')
            setTimeout(function(){
                message.channel.send({files: ['./src/data/wuwa/output.png']})
            }, 5000);
        }
    else {
      
    if(!isNaN(arg)){  
        var roll = Number(arg)
        if (arg > 80 || arg < 0) {
            message.channel.send("Invalid pity parameter. Number of rolls must be from 0 to 80 (hard pity)");
        } else {
            let rate5 = 0.8
                rate4 = 6
            
            if (roll>65 && roll < 80){
                rate5 = rate5 + 5.657 * (roll - 65);
            } else if (roll == 80){
                rate5 = 100;
            } else if (roll < 65){
                rate5 = 0.8;
            }

            if (roll%10 < 10 && roll%10 != 0){
                rate4 = rate4 + 10.67 * (roll%10 - 1) + 0.8 - rate5;
            } else if (roll%10 == 0 && roll != 80){
                rate4 = 100 - rate5;
            } else if (roll%10 == 0 && roll == 80){
                rate4 = 0
            }

            let rate3 = 100 - rate5 - rate4;
            message.reply(`5 stars rate: ${rate5.toFixed(4)}%\n4 stars rate: ${rate4.toFixed(4)}%\n3 stars rate: ${rate3.toFixed(4)}%`);
        }
        }   
    }

    }
});


async function quer(discordId){


}