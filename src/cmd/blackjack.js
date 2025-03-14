const Command = require("../structures/Command.js");
const card = require("../data/card.json")
module.exports = new Command({
    name: "blackjack",
    description: "lets go gambling",
    alias:["bj"],

    async run(message, args, client) {
        var mode = args.slice(1).join(" ").toLowerCase();
        const collector = message.channel.createMessageCollector(
            msg => msg.author.id == message.author.id,
            {time: 6000}
          );
            var f = [];
            var s =[];
            var sf = [];
            var val = [];
            userIndex = message.author.id % 1000000000;

            var num = Math.floor(Math.random() * 13)+1;
            var suit = Math.floor(Math.random() * 4)+1;
            var num1 = Math.floor(Math.random() * 13)+1;
            var suit1 = Math.floor(Math.random() * 4)+1;
    
            f[1] = Math.floor(Math.random() * 13)+1;
            s[1] = Math.floor(Math.random() * 4)+1;
            f[2] = Math.floor(Math.random() * 13)+1;
            s[2] = Math.floor(Math.random() * 4)+1;
            f[3] = Math.floor(Math.random() * 13)+1;
            s[3] = Math.floor(Math.random() * 4)+1;
            f[4] = Math.floor(Math.random() * 13)+1;
            s[4] = Math.floor(Math.random() * 4)+1;
            f[5] = Math.floor(Math.random() * 13)+1;
            s[5] = Math.floor(Math.random() * 4)+1;
            
            var num2 = Math.floor(Math.random() * 13)+1;
            var suit2 = Math.floor(Math.random() * 4)+1;
            var num3 = Math.floor(Math.random() * 13)+1;
            var suit3 = Math.floor(Math.random() * 4)+1;
            var num4 = Math.floor(Math.random() * 13)+1;
            var suit4 = Math.floor(Math.random() * 4)+1;

            message.channel.send(`Your cards: ${card[suit][num]}, ${card[suit1][num1]}\nAngelina: ${card[s[1]][f[1]]}\nMessage \`hit\` to draw a card, \`stand\` to draw none, or \`stop\` to end the game`)
            var cout = 2;

            if (num > 10){val[0] = 10} else val[0] = num;
            if (num1 > 10){val[1] = 10} else val[1] = num1;
            if (num2 > 10){val[2] = 10} else val[2] = num2;
            if (num3 > 10){val[3] = 10} else val[3] = num3;
            if (num4 > 10){val[4] = 10} else val[4] = num4;

            if (f[1] > 10){sf[1] = 10} else sf[1] = f[1];
            if (f[2] > 10){sf[2] = 10} else sf[2] = f[2];
            if (f[3] > 10){sf[3] = 10} else sf[3] = f[3];
            if (f[4] > 10){sf[4] = 10} else sf[4] = f[4];
            if (f[5] > 10){sf[5] = 10} else sf[5] = f[5];

            var play = calTotal(val.slice(0,2));
            //message.channel.send("Starting block: " + play);
            //message.channel.send(val[0],val[1],val[2],val[3],val[4]);

            for await (const msg of collector) {
            if (bjcheck(val[0], val[1])){
                message.channel.send("**You got a black jack. Auto win**");
                collector.stop();
                playerWon();
                break;
            }
            if (msg.content.toLowerCase() == "hit") {
                //collector.stop()
                
                if (cout == 2){
                    var play = calTotal(val.slice(0,3));
                    if (play > 21){
                        message.channel.send(`You busted. Total value was ${play}`);
                        playerLost();
                        collector.stop()
                    }
                    message.channel.send(`Your cards: ${card[suit][num]}, ${card[suit1][num1]}, ${card[suit2][num2]}\nAngelina: ${card[s[1]][f[1]]}`);;
                    cout++;
                } else if (cout == 3){
                    var play = calTotal(val.slice(0,4));
                    if (play > 21){
                        message.channel.send(`You busted. Total value was ${play}`);
                        playerLost();
                        collector.stop()
                        }
                    message.channel.send(`Your cards: ${card[suit][num]}, ${card[suit1][num1]}, ${card[suit2][num2]}, ${card[suit3][num3]}\nAngelina: ${card[s[1]][f[1]]}`);;
                    cout++;
                } else if (cout == 4){   
                    var play = calTotal(val.slice(0,5));
                    if (play > 21){
                        message.channel.send(`You busted. Total value was ${play}`); 
                        playerLost();
                        collector.stop()
                    } 
                    else if(play <= 21){
                        message.channel.send(`You won by 5-cards Charlie. Total value was ${play}`); 
                        playerWon();
                        collector.stop()
                    } 
                    message.channel.send(`Your cards: ${card[suit][num]}, ${card[suit1][num1]}, ${card[suit2][num2]}, ${card[suit3][num3]}, ${card[suit4][num4]}\nAngelina: ${card[s[1]][f[1]]}`);;
                    cout++;
                } 
            }
            if (msg.content.toLowerCase() == "stand") {
                var playstr = "";
                switch(cout){
                    case 2:
                        playstr = `Your cards: ${card[suit][num]}, ${card[suit1][num1]}`
                        break;
                    case 3:
                        playstr = `Your cards: ${card[suit][num]}, ${card[suit1][num1]}, ${card[suit2][num2]}`
                        break;
                    case 4:
                        playstr = `Your cards: ${card[suit][num]}, ${card[suit1][num1]}, ${card[suit2][num2]}, ${card[suit3][num3]}`
                        break;
                    default:
                        playstr = `Your cards: ${card[suit][num]}, ${card[suit1][num1]}, ${card[suit2][num2]}, ${card[suit3][num3]}, ${card[suit4][num4]}`
                }
                
                for (let i = 2; i<=5; i++){
                    if(play<16){
                        message.channel.send("You did not met the 16 requirement. You busted");
                        playerLost();
                        message.channel.send(`Your cards: ${card[suit][num]}, ${card[suit1][num1]}\nAngelina: ${card[s[1]][f[1]]}, ${card[s[2]][f[2]]}`)
                        collector.stop();
                        break;
                    }
                    await new Promise(r => setTimeout(r, 1000));
                    var tt = 0;
                    var angestr = card[s[1]][f[1]];
                    tt = calTotal(sf.slice(1,i+1))
                    for (let j = 2; j<=i; ++j){
                        angestr = angestr + ", " + card[s[j]][f[j]];
                    }
                    message.channel.send(`Your cards: ${playstr}\nAngelina: ${angestr}`)
                    if (mode == "debug")message.channel.send(`Angie: ${tt}\nPlayer: ${play}`)
                        if (bjcheck(sf[1], sf[2])){
                            message.channel.send("**Angelina got a black jack. You lose**");
                            collector.stop();
                            playerLost();
                            break;
                        }
                    if(tt <= play){
                        message.channel.send(`Angelina will draw one more card\n-------------------------------`);
                    }
                    if(tt>21){
                        message.channel.send(`**Angelina busted, you win**`);
                        collector.stop();
                        playerWon();
                        break;
                    }
                    if(tt>play && tt<=21){
                        message.channel.send(`**Angelina got higher hand, you lost**`);
                        collector.stop();
                        playerLost();
                        break;
                    }
                    if(tt <= 21 && i == 5){
                        message.channel.send(`**Angelina won by  5-Cards Charlie rule**`);
                        collector.stop();
                        playerLost();
                        break;
                    }
                }
            }
            if (msg.content.toLowerCase() == "stop") {collector.stop()}
            // etc...
        }
          // This will be sent when the collector ends (when time runs out or if you
          // manually stop it with collector.stop())
        message.reply(`Game over`);
    }
});

function bjcheck(x, y){
    if ((x == 1 && y == 10) || (y == 1 && x == 10) || (y == 1 && x == 1)) return true;
}

function calTotal(a){
    var total = 0;
    var count = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] == 1) {count++} else total = total + a[i];
    }
    if (count == 0) {return total} else {if (total + count - 1 > 10) {return total + count} else {return total + count + 10}}
}

function isNotBankrupt(money, type){
        if (money < 40) {return false} else {return true};
}

function playerWon(){
    global.userCost[userIndex] = global.userCost[userIndex] + 40;
}

function playerLost(){
    global.userCost[userIndex] = global.userCost[userIndex] - 40;
}