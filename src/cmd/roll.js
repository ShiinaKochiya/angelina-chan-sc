const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "roll",
    description: "roll a random number from 1 to 100",

    async run(message, args, client) {
        var n = args.slice(1).join(" ")
        var ch = 1
        console.log(message.author.tag,"used a!roll",n)
        if (!isNaN(n)){
            if (n === "") {
                var n = 100;
                var ch = 0
            } else
            if (n < 1) {message.reply('You entered an invalid number!')} else {var ch = 0}
        var numba = Math.floor(Math.random() * n) + 1;
    var name = message.author.username;
    if (ch === 0) {message.reply(`${name} rolled ${numba}`)}} else message.reply(`you didn't provide a valid number!`)

    }
});
