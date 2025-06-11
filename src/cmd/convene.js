const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "convene",
    description: "PHOEBEEEEEEEEEE",

    async run(message, args, client) {
      var arg = args.slice(1).join(" ").toLowerCase();
      
    if(!isNaN(arg)){  
        var roll = Number(arg)
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
});
