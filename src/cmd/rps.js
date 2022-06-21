const { Message, Collection } = require(`discord.js`);
const Command = require (`../structures/Command.js`);

module.exports = new Command ({
     name: `rps`,
     description: `Rocks, papers, scissors`,
    alias: ["rockpaperscissor"],
     async run(message, args, client) {
     if (message.author.bot) return;

                var valid = true;
				var UserChoiceRPS = args.slice(1).join(" ").toLowerCase();
                switch(UserChoiceRPS){
                    case UserChoiceRPS = "rock":
                        var UserChoiceN = 1;
                        break;
                    case UserChoiceRPS = "r":
                        var UserChoiceN = 1;
                        break;
                    case UserChoiceRPS = "paper":
                        var UserChoiceN = 2;
                        break;
                    case UserChoiceRPS = "p":
                        var UserChoiceN = 2;
                        break;
                    case UserChoiceRPS = "scissor":
                        var UserChoiceN = 3;
                        break;
                    case UserChoiceRPS = "s":
                        var UserChoiceN = 3;
                        break;
                    default:
                        var valid = false;
                }
                if (valid===false){message.reply(`Invalid choice bruh`)} else {
                    var bc = Math.floor(Math.random()*3)+1  
                    switch(bc){
                        case bc = 1:
                            var BotChoice = "Rock";
                            break;
                        case bc = 2:
                            var BotChoice = "Paper";
                            break;
                        case bc = 3:
                            var BotChoice = "Scissor";
                    }
                    switch(UserChoiceN){
                        case UserChoiceN = 1:
                            var UserChoiceRPS = "Rock";
                            break;
                        case UserChoiceN = 2:
                            var UserChoiceRPS = "Paper";
                            break;
                        case UserChoiceN = 3:
                            var UserChoiceRPS = "Scissor";
                    }
                    if (UserChoiceN === bc){message.reply(`It's a draw\nYour selection: ${UserChoiceRPS}\nMy selection: ${BotChoice}`)}
                    //U:Rock B:Paper        win
                    else if (UserChoiceN === 1 && bc === 2){message.reply(`<:angie_like:988732747059175444> I win\nYour selection: Rock\nMy selection: ${BotChoice}`)}
                    //U:Rock B:Scissor      lose
                    else if (UserChoiceN === 1 && bc === 3){message.reply(`<:ange_angy:988730780031279125> You win\nYour selection: Rock\nMy selection: ${BotChoice}`)}
                    //U:Paper B:Rock        lose
                    else if (UserChoiceN === 2 && bc === 1){message.reply(`<:Tsukasa_4koma:988738686541787168> You win\nYour selection: Paper\nMy selection: ${BotChoice}`)}
                    //U:Paper B:Scissor     win
                    else if (UserChoiceN === 2 && bc === 3){message.reply(`<:ange_ayaya:956939948634828872> I win\nYour selection: Paper\nMy selection: ${BotChoice}`)}
                    //U:Scissor B:Rock      win
                    else if (UserChoiceN === 3 && bc === 1){message.reply(`<:Minori_4koma:988736646952390656> I win\nYour selection: Scissor\nMy selection: ${BotChoice}`)}
                    //U:Scissor B:Paper     lose
                    else if (UserChoiceN === 3 && bc === 2){message.reply(`<:Honami_4koma:988736648697233428> You win\nYour selection: Scissor\nMy selection: ${BotChoice}`)}
                    
                    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"})
                    console.log("[",time,"]",message.author.tag,`played a game of rocks, papers, scissors. ${message.author.tag} played ${UserChoiceRPS}, while Angie played ${BotChoice}`);
	}
    }
});
