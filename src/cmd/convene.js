const Command = require("../structures/Command.js");
const mergeImg = require('merge-img');
const sharp = require("sharp")
const { getPity, updatePityCache } = require("../pitySchema.js");
const { naughtyList } = require("../naughtyList.js");
const cooldowns = new Map();
const charlist = require("../data/charlist_wuwa.json")

module.exports = new Command({
    name: "convene",
    description: "PHOEBEEEEEEEEEE",

    async run(message, args, client) {

        var arg = args.slice(1).join(" ").toLowerCase();
        const userId = message.author.id;
        let i = 0;
        let convRes = []
        let gacha = []
        let actualPity = await getPity(userId);
        const maxStar3 = Math.max(...Object.keys(charlist.star3).map(Number));
        const maxStar4 = Math.max(...Object.keys(charlist.star4).map(Number));
        const maxStar5 = Math.max(...Object.keys(charlist.star5).map(Number));

        
            for (let i = 0; i<10; i++){
                var rate5 = 0.8
                var rate4 = 6
            
            if (actualPity.wuwaPity>65 && actualPity.wuwaPity < 80){
                rate5 = rate5 + 5.657 * (actualPity.wuwaPity - 65);
            } else if (actualPity.wuwaPity == 80){
                rate5 = 100;
            } else if (actualPity.wuwaPity < 65){
                rate5 = 0.8;
            }
            
            if (actualPity.wuwaPity == 80){
                rate4 = 0
            } else if(actualPity.wuwaPity4 > 9){
                rate4 = 100 - rate5;
            }

            let rate3 = 100 - rate5 - rate4;
            let temp, temp2, path;
            var random = Math.floor(Math.random() * 100);
            console.log(`roll result: ${random}, pity count:${actualPity.wuwaPity}, pity count 4: ${actualPity.wuwaPity4}`)
            console.log(`rate 3: ${rate3}, rate 4: ${rate4},rate 5: ${rate5}`)
                if (random < rate3){
                    var result = Math.floor(Math.random() * maxStar3) + 1;
                    console.log("res 3:", result)
                    temp = charlist.star3[result].res;
                    temp2 = temp.replaceAll(" ", "_")
                    path = temp2.replaceAll(":", "");
                    gacha[i] = `./src/data/wuwa/3star/${path}.png`
                    convRes[i] = charlist.star3[result];
                    actualPity.wuwaPity++;
                    actualPity.wuwaPity4++;
                }
                else if (random < (rate3 + rate4)){
                    var result = Math.floor(Math.random() * maxStar4) + 1;
                    console.log("res 4:", result)
                    temp = charlist.star4[result].res;
                    temp2 = temp.replaceAll(" ", "_")
                    path = temp2.replaceAll(":", "");
                    gacha[i] = `./src/data/wuwa/4star/${path}.png`
                    convRes[i] = charlist.star4[result];
                    actualPity.wuwaPity++;
                    actualPity.wuwaPity4 = 0;
                }
                else{
                    var result = Math.floor(Math.random() * maxStar5) + 1;
                    console.log("res 5:", result)
                    console.log(result)
                    temp = charlist.star5[result].res;
                    temp2 = temp.replaceAll(" ", "_")
                    path = temp2.replaceAll(":", "");
                    gacha[i] = `./src/data/wuwa/5star/${path}.png`
                    convRes[i] = charlist.star5[result];
                    actualPity.wuwaPity = 0;
                    actualPity.wuwaPity4 = 0;
                    }
            
            }
            mergeImg(gacha).then((img) => img.write('./src/data/wuwa/out.png'))
            message.channel.send("Database and pity systems is under construction! Enjoy unlimted 5 star Convene for the mean time with all Resonators in the pool. You can check for *not really* accurate pity (no its not, it is based on player data) percentage by using `a!convene <number of rolls>`")
            


            setTimeout(function(){
                setTimeout(function(){
                    sharp('./src/data/wuwa/out.png')
                    .resize({ width: 960 })
                    .toFile('./src/data/wuwa/output.png')
                },2000)
            },2000)

            setTimeout(function(){
                setTimeout(function(){
                    message.channel.send({files: ['./src/data/wuwa/output.png']})
                }, 4000);
            }, 3000);
      
            
        

        updatePityCache(userId, {
            arknightsPity: actualPity.arknightsPity, 
            wuwaPity: actualPity.wuwaPity,
        });
    }
});
