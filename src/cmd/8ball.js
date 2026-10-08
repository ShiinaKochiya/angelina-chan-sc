const Command = require("../structures/Command.js");

const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "8ball",
    description: "8 ball of magic",

    async run(message, args, client) {
        if (message.author.bot) return;
        
        
        function sleep(ms) {
           return new Promise(resolve => setTimeout(resolve, ms));
        }        

        function ball(num){
            switch(num){
                case 1:
                    return "It is certain";
                    break;
                case 2:
                    return "It is decidedly so";
                    break;
                case 3:
                    return "Reply hazy, try again";
                    break;
                case 4:
                    return "Don't count on it";
                    break;
                case 5:
                    return "Without a doubt";
                    break;
                case 6:
                    return "Ask again later";
                    break;
                case 7:
                    return "Yes definitely";
                    break;
                case 8:
                    return "My reply is no";
                    break;
                case 9: 
                    return "You may rely on it"
                    break;
                case 10:
                    return "Better not tell you now";
                    break;
                case 11:
                    return "As I see it, yes";
                    break;
                case 12:
                    return "My sources say no";
                    break;
                case 13:
                    return "Most likely";
                    break;
                case 14:
                    return "Cannot predict now";
                    break;
                case 15:
                    return "Outlook good";
                    break;
                case 16:
                    return "Outlook not so good";
                    break;
                case 17: 
                    return "Yes";
                    break;
                case 18:
                    return "Cannot predict now";
                    break;
                case 19:
                    return "Signs point to yes";
                    break;
                default:
                    return "Very doubtful";

            }
        }

        async function balls() {
            const msg =  await message.reply(`The 8 ball is thinking`);
            await sleep(2 * 1000);
            var num = Math.floor(Math.random() * 20)+1;
            msg.edit(`Question: ${args.slice(1).join(" ")} \nPrediction: ${ball(num)}`)
        }
        
        balls();
        
        
        
        
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]",message.author.tag,"asked the 8 ball of magic");
    }
});
