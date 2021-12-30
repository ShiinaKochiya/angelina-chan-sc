const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "countdown",
    description: "countdown le fucking time",

    async run(message, args, client) {
        if (message.author.bot) return;
        var c = args.slice(1).join(" "); 
        var a = 0
        var check = 1
        console.log(message.author.tag,"used a!countdown", c)
        if (message.author.bot) {
            message.reply(`Don't...`)
            return;
        } else if (c < 0) {message.reply('You entered an invalid number!')} else if (isNaN(c)){message.reply('You didnt provide a number at all!')} else if(c > 300){message.reply('You entered a number that is too large')} else {var a = 1}
        if (a = 1){
        let cd = setInterval(function () {
        c = c - 1;
        message.channel.send(`${c}`)
        if (c === 0) {
        message.reply("Timer Done!");
        clearInterval(cd);
    }
}, 1000)}
    }   
});





