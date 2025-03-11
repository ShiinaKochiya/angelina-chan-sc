const Command = require("../structures/Command.js");
const card = require("../data/card.json");
const cardData = require("../data/card_data.json")
const Hand = require('pokersolver').Hand;

module.exports = new Command({
    name: "poker",
    description: "lets go gambling pt 2",
    
    async run(message, args, client) {
        //var hand = Hand.solve([`8d`, `7h`, `9s` , `2h` , '9d']);
        //console.log(hand.name);
        var mode = args.slice(1).join(" ").toLowerCase();
        const collector = message.channel.createMessageCollector(
            msg => msg.author.id == message.author.id,
            {time: 6000}
          );
            var playerCard = [];
            var ange_card = [];
            var inDeck = [];
            var inDeckDisplay = [];
            var pot = 30;
            var round = 1
            var callValid = false;
            var raised = false;
            var checkCont = false;
            var angeTurn = false;
            var betEnd = false;
            let winnr = 0;

            //generating deck
            let temp = Math.floor(Math.random() * 4)+1;
            let temp2 = Math.floor(Math.random() * 13)+1
            inDeck[0] = cardData[temp][temp2]
            inDeckDisplay[0] = card[temp][temp2]

            for (let i = 1; i < 9; i++){
                let check = false;
                let num, suit;
                while (check == false){
                    check = true;
                    num = Math.floor(Math.random() * 13)+1;
                    suit = Math.floor(Math.random() * 4)+1;
                    for (let j = 0; j<i; j++){
                        if (inDeck[j] == cardData[suit][num]){check = false;}
                    }
                }
                inDeck[i] = cardData[suit][num];
                inDeckDisplay[i] = card[suit][num];
            }

            console.log(inDeck);
            console.log(inDeckDisplay);

            //dealing Angelina cards
            ange_card[0] = inDeck[0];
            ange_card[1] = inDeck[1];

            for (let i = 2; i < 7; i++){
                ange_card[i] = inDeck[i+2]
            }
            console.log(`ange deck:`)
            console.log(ange_card)

            //dealing player cards
            for (let i = 0; i < 7; i++){
                playerCard[i] = inDeck[i+2]
            }
            console.log(`player deck:`)
            console.log(playerCard)

            console.log(`-------------------------------------------`)
            
            var hand1 = Hand.solve(ange_card)
            var hand2 = Hand.solve(playerCard)
            var winner = Hand.winners([hand1, hand2]);

            if (winner[0].descr == hand1.descr) {winnr = 1} else {winnr = 2}
            console.log(winner[0].descr)

            message.channel.send(`Poker game in progress\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]}\nPot value: ${pot} (Angelina big blind: 20)\n--------------------------------------\nNext round is the Turn card\n--------------------------------------\nMessage \`call\` to call a bet, \`raise\` to raise a bet, \`check\` to check or \`fold\` to abandon the current hand`)

            for await (const msg of collector) {
                //Calling case
            if (msg.content.toLowerCase() == "call") {
                if (callValid == false){
                    message.channel.send("Invalid call, no raise were dropped")
                } else {
                    callValid = false;
                    raised = false;
                    pot = pot + 20;
                    message.channel.send(`Player called 20 bits, proceeds to next round. Pot: ${pot}`)
                    round++;
                    angeTurn = true;
                    betEnd = true;
                }
            }
            //Raising case
            if (msg.content.toLowerCase() == "raise") {
                pot = pot + 20;
                callValid = true;
                raised = true;
                angeTurn = true;
                checkCont = false;
                message.channel.send(`Player raised 20 bits. Pot: ${pot}`)
            }
            //Checking case
            if (msg.content.toLowerCase() == "check") {
                if (raised == true) {
                    message.channel.send("Cannot check, pot was raised. You need to call or raise.")
                } else {
                    if(checkCont == true) {
                        message.channel.send("Both player checked, proceed to next round");
                        round++;
                        checkCont = false;
                        angeTurn = true;
                        betEnd = true;
                    } else {
                        checkCont = true;
                        message.channel.send("You checked");
                        angeTurn = true;
                        callValid = false;
                    }
                }
            }
            //Folding case
            if (msg.content.toLowerCase() == "fold") {
                message.channel.send("You folded");
                collector.stop();
            }
             //changing rounds
             while(betEnd == true){
                switch(round){
                    case 2:
                        message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]}\nPot value: ${pot}\n--------------------------------------\nNext round is the River card`)
                        break;
                    case 3:
                        message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]},${inDeckDisplay[8]}\nPot value: ${pot}\n--------------------------------------\nShowdown soon`)
                        break;
                    default:
                        message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]},${inDeckDisplay[8]}\nAngelina cards: ${inDeckDisplay[0]}, ${inDeckDisplay[1]}\nPot value: ${pot}\n--------------------------------------\nShowdown commencing`)
                        if (winnr == 1) {message.channel.send(`Angelina won by ${winner[0].descr}`)} else {message.channel.send(`You won by ${winner[0].descr}`)}
                        collector.stop();
                        angeTurn = false;
                }
                betEnd = false;
            }
            //Angelina functions:
            
            while (angeTurn == true){
                var hand;
                var score;
                switch(round){
                    case round = 1:
                        hand = Hand.solve(ange_card.slice(0,5))
                        break;
                    case round = 2:
                        hand = Hand.solve(ange_card.slice(0,6))
                        break;
                    case round = 3:
                        hand = Hand.solve(ange_card.slice(0,7))
                        break;
                    default:
                        score = 0;
                }
                score = hand.rank + 5
                console.log(score)
                angeTurn = false;
                let choice = Math.floor(Math.random() * 100)+1;
                if (choice > score * 10){
                    message.channel.send("Angelina folded, you win")
                    message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]},${inDeckDisplay[8]}\nAngelina cards: ${inDeckDisplay[0]}, ${inDeckDisplay[1]}\nPot value: ${pot}`)
                    collector.stop();
                } else {
                    choice = Math.floor(Math.random() * 100)+1;
                    if(choice > 50){
                        pot = pot + 20;
                        message.channel.send(`Angelina raised 20. Pot: ${pot}`)
                        callValid = true;
                        raised = true;
                        checkCont = false;
                    } else {
                        if(checkCont == true){
                            message.channel.send("Both player checked, proceed to next round");
                            round++;
                            checkCont = false;
                            betEnd = true;
                        } else if (callValid == true){
                            callValid = false;
                            raised = false;
                            pot = pot + 20;
                            message.channel.send(`Angelina called 20 bits. Betting round ends. Pot: ${pot}`)
                            round++;
                            betEnd = true;
                        } else {
                            message.channel.send("Angelina checked");
                            checkCont = true;
                        }
                    }
                }
            }
           
            //end
        }
          // This will be sent when the collector ends (when time runs out or if you
          // manually stop it with collector.stop())
        message.reply(`Game over`);
        message.channel.send(`Angelina best hand: ${hand1.descr}\nYour best hand: ${hand2.descr}`)
    }
});
