const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "help",
    description: "show bot help",

    async run(message, args, client) {
        if (message.author.bot) return;
        console.log(message.author.tag,"used a!help")
        message.reply(`**Commands for Angie-chan**\n-------------------------------------------------------------------\na!info - show the info about the bot\na!roll - generate a random number between 0 and 100\na!ping - check the bot latency\na!shutdown - Temporary shut down the bot\na!hentai - sending a random hentai picture from Sakura Vault(Only usable in NSFW channel)\na!ship - ship to see how much you fit with the other\na!operator - show a breif guide for an Operator (to see all available operator, do a!operator list)\na!countdown - countdown a specfic amount of time, expect smth more?\na!wtf - Send BeasttrollMC screaming "WHAT THE FUCK"\na!seggs - SEGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG\n-------------------------------------------------------------------\nYe that's all, it's just a beta version, not much commands have been added`)

    }   
});
