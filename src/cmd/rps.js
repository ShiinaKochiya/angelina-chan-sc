// Command: a!rps
// Author: giabao06 (giabaodoremon@gmail.com)
// Description: play a game of rocks, papers, scissors

const Command = require ("../structures/Command.js");

module.exports = new Command ({
     name: "rps",
     description: "Rocks, papers, scissors",
  
     async run(message, args, client) {
     if (message.author.bot) return;
     
     function rpsequal(choice){
          var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric",
                                             second: "numeric"})
          console.log("[",time,"]",message.author.tag,`played a game of rocks, papers, scissors`);

     // this function should send the msg when the bot's choice
     // and the player's choice are the same, however I'm dumb
     // at js so *some help required
     } 

     var sel = Math.floor(Math.random() * 3); //the bot plays. 0=rocks, 1=paper, 2=scissors
     if (args.slice.(2).join(" ")==="rocks" {var player = 0;} else 
     if (args.slice.(2).join(" ")==="papers" {var player = 1;} else
     if (args.slice.(2).join(" ")==="scissors" {var player = 2;}
     if player == sel {rpsequal(sel)} else
     {
          var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric",
                                             second: "numeric"})
          console.log("[",time,"]",message.author.tag,`played a game of rocks, papers, scissors`);

      // (this next part should send winning / losing msg, but I'm dumb
      }
    }
});

