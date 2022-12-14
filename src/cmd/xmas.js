const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "christmas",
    description: "christmas countdown",
    alias:["xmas"],

    async run(message, args, client) {
        const now = new Date();
        var date_now = now.valueOf()
        var date_future = 1671948000000
        
        var delta = Math.abs(date_future - date_now) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        
        message.reply("There's", days, "days and", hours, "hours left until Chirtmas")
    }   
});
