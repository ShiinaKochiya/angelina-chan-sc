const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "countdown",
    description: "countdown le fucking time",

    async run(message, args, client) {
        var c = args.slice(1).join(" "); 
        var a = 0
        console.log(message.author.tag,"used a!countdown", c)
        if (message.author.bot) {
            message.reply(`Don't...`)
            return;
        } else if (c < 0) {message.reply('You entered an invalid number!')} else if (isNaN(c)){message.reply('You didnt provide a number at all!')} else if(c > 300){message.reply('You entered a number that is too large')} else {var a = 1}
        if (a = 1){
        setInterval(function () {
        c = c - 1;
        if (c === 0) {
        message.reply("Timer Done!")
        return;
    }
}, 1000)}
    }   
});





