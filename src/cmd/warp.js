const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "warp",
    description: "HEADS UP, THE WHEELS ARE SINGING. THE WHISPERS AND SECRETS THEY KEEP. TO HOPE, WE BOUND, WOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",

    async run(message, args, client) {
      var arg = args.slice(1).join(" ").toLowerCase();
      
    if(!isNaN(arg)){  
        var roll = Number(arg)
        let rate5 = 0.6
            rate4 = 5.1
            
        if (roll>75 && roll < 90){
            rate5 = rate5 + 6.6266 * (roll - 75);
        } else if (roll == 90){
            rate5 = 100;
        } else if (roll < 75){
            rate5 = 0.6;
        }

        if (roll%10 < 10 && roll%10 != 0){
            rate4 = rate4;
        } else if (roll%10 == 0 && roll != 90 && roll != 0){
            rate4 = 100 - rate5;
        } else if (roll%10 == 0 && roll == 90 && roll != 0){
            rate4 = 0
        } else if (roll == 0){
            rate4 = 6;
        }

        let rate3 = 100 - rate5 - rate4;
        message.reply(`5 stars rate: ${rate5.toFixed(4)}%\n4 stars rate: ${rate4.toFixed(4)}%\n3 stars rate: ${rate3.toFixed(4)}%`);

    }

    }
});
