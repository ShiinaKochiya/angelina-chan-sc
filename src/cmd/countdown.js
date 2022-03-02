const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "countdown",
    alias: "timer",
    description: "countdown le fucking time",

    async run(message, args, client) {
        if (message.author.bot) return;
        var c = args.slice(1).join(" ");
        if (c==='')return message.reply("Ya can't count in negative integers, dum");
        var a = 0
        var check = 1
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]",message.author.tag,"used countdown for", c,"seconds")
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
