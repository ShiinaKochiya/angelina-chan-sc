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
        userIndex = message.author.id % 1000000000;
        if (global.userCost[userIndex] == undefined){global.userCost[userIndex] = 200};

        if (global.userCost[userIndex] < 40){
            message.channel.send("Not enough bits! Cannot play")
        } else {
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
            var raised = false;
            var checkCont = false;
            var angeTurn = false;
            var betRoundEnd = false;
            var startingBet = true;
            let winnr = 0;
            
            //entry cost
            global.userCost[userIndex] = global.userCost[userIndex]  - 200;

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
            //console.log(inDeck);
            //console.log(inDeckDisplay);

            //dealing Angelina cards
            ange_card[0] = inDeck[0];
            ange_card[1] = inDeck[1];

            for (let i = 2; i < 7; i++){
                ange_card[i] = inDeck[i+2]
            }
            //console.log(`ange deck:`)
            //console.log(ange_card)

            //dealing player cards
            for (let i = 0; i < 7; i++){
                playerCard[i] = inDeck[i+2]
            }
            //console.log(`player deck:`)
            //console.log(playerCard)

            //console.log(`-------------------------------------------`)
            
            var hand1 = Hand.solve(ange_card)
            var hand2 = Hand.solve(playerCard)
            var winner = Hand.winners([hand1, hand2]);

            if (winner[0].descr == hand1.descr && winner[0].descr == hand2.descr) {winnr = 3} else if (winner[0].descr == hand1.descr) {winnr = 1} else if (winner[0].descr == hand2.descr) {winnr = 2}
            //console.log(winner[0].descr)

            message.channel.send(`Poker game in progress\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]}\nPot value: ${pot} (Angelina big blind: 20)\n--------------------------------------\nNext round is the Turn card\n--------------------------------------\nMessage \`bet\` to place a starting bet, \`call\` to call a bet, \`raise\` to raise a bet, \`check\` to check or \`fold\` to abandon the current hand`)
            if (mode == "show"){
                let handTemp = Hand.solve(playerCard.slice(0,round + 4))
                message.channel.send(`Your current best hand: ${handTemp.descr}`)
            }
            for await (const msg of collector) {
                //Starting bet case
            if (msg.content.toLowerCase() == "bet") {
                if (startingBet == false){
                    message.channel.send("Cannot bet, round starting bet passed")
                } else if (!isNotBankrupt(global.userCost[userIndex], "bet")){
                    message.channel.send("Not enough money, cannot bet anymore")
                } else {
                    pot = pot + 20;
                    global.userCost[userIndex] = global.userCost[userIndex] - 20;
                    message.channel.send(`Player bet 20 bits. Pot: ${pot}`)
                    startingBet = false;
                    angeTurn = true;
                    checkCont = false;
                    raised = false;
                }
            }
                //Calling case
            if (msg.content.toLowerCase() == "call") {
                if (raised == false){
                    message.channel.send("Invalid call, no raise were dropped")
                } else if (!isNotBankrupt(global.userCost[userIndex], "call")){
                    message.channel.send("Not enough money, cannot call anymore")
                } else {
                    raised = false;
                    pot = pot + 40;
                    global.userCost[userIndex] = global.userCost[userIndex] - 40;
                    message.channel.send(`Player called 40 bits, proceeds to next round. Pot: ${pot}`)
                    round++;
                    angeTurn = true;
                    startingBet = false;
                    betRoundEnd = true;
                }
            }
            //Raising case
            if (msg.content.toLowerCase() == "raise") {
                if (!isNotBankrupt(global.userCost[userIndex], "raise")){
                    message.channel.send("Not enough money, cannot raise anymore")
                } else {
                    pot = pot + 40;
                    raised = true;
                    angeTurn = true;
                    checkCont = false;
                    startingBet = false;
                    message.channel.send(`Player raised by 20 bits. Pot: ${pot}`)
                }
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
                        betRoundEnd = true;
                    } else {
                        checkCont = true;
                        message.channel.send("You checked");
                        angeTurn = true;
                        raised = false;
                        startingBet = false;
                    }
                }
            }
            
            //Folding case
            if (msg.content.toLowerCase() == "fold") {
                message.channel.send("You folded");
                collector.stop();
            }

             //changing rounds
             while(betRoundEnd == true){
                switch(round){
                    case 2:
                        message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]}\nPot value: ${pot}\n--------------------------------------\nNext round is the River card`)
                        startingBet = true;
                        break;
                        
                    case 3:
                        message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]},${inDeckDisplay[8]}\nPot value: ${pot}\n--------------------------------------\nShowdown soon`)
                        startingBet = true;
                        break;
                    default:
                        message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]},${inDeckDisplay[8]}\nAngelina cards: ${inDeckDisplay[0]}, ${inDeckDisplay[1]}\nPot value: ${pot}\n--------------------------------------\nShowdown commencing`)
                        startingBet = true;
                        if (winnr == 1) {message.channel.send(`Angelina won by ${winner[0].descr}`)} else if (winnr == 2){message.channel.send(`You won by ${winner[0].descr}`)}
                        else if(winnr == 3){
                            let res = checkEqual(inDeck[0], inDeck[1], inDeck[2], inDeck[3]);
                            if (res == 1){
                                message.channel.send("You won by higher cards");
                                global.userCost[userIndex] = global.userCost[userIndex] + pot;
                            } else if (res == 2){message.channel.send("Angelina won by higher cards")} else {message.channel.send("Both player got the same hand and cards, pot are splitted equally")}
                        }
                        collector.stop();
                        angeTurn = false;
                        
                }
                betRoundEnd = false;
                if (mode == "show" && round <4){
                    let handTemp = Hand.solve(playerCard.slice(0,round + 4))
                    message.channel.send(`Your current best hand: ${handTemp.descr}`)
                }
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
                score = hand.rank + 7
                //console.log(score)
                angeTurn = false;
                let choice = Math.floor(Math.random() * 100)+1;
                if (choice > score * 10){
                    message.channel.send("Angelina folded, you win")
                    message.channel.send(`\n--------------------------------------\nYour cards: ${inDeckDisplay[2]}, ${inDeckDisplay[3]}\nRiver: ${inDeckDisplay[4]}, ${inDeckDisplay[5]}, ${inDeckDisplay[6]},${inDeckDisplay[7]},${inDeckDisplay[8]}\nAngelina cards: ${inDeckDisplay[0]}, ${inDeckDisplay[1]}\nPot value: ${pot}`)
                    global.userCost[userIndex] = global.userCost[userIndex] + pot;
                    collector.stop();
                } else {
                    choice = Math.floor(Math.random() * 100)+1;
                    if(choice > 50){
                        let chanceTemp = Math.floor(Math.random() * 100)+1;
                        if (chanceTemp < 50 && startingBet == true) {
                            pot = pot + 20;
                            message.channel.send(`Angelina betted 20. Pot: ${pot}`)
                            startingBet = false;
                            checkCont = false;
                            raised = false;
                        } else {
                            pot = pot + 40;
                            message.channel.send(`Angelina raised by 20. Pot: ${pot}`)
                            raised = true;
                            checkCont = false;
                            startingBet = false;
                        }
                    } else {
                        if(checkCont == true){
                            message.channel.send("Both player checked, proceed to next round");
                            round++;
                            checkCont = false;
                            betRoundEnd = true;
                        } else if (raised == true){
                            raised = false;
                            pot = pot + 40;
                            message.channel.send(`Angelina called 20 bits. Betting round ends. Pot: ${pot}`)
                            round++;
                            betRoundEnd = true;
                            betRoundEnd = true;
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
    }
});

function checkEqual(p1,p12,p2,p22){
    var num = [];
    num[1] = p1.slice(0,1);
    num[2] = p12.slice(0,1);
    num[3] = p2.slice(0,1);
    num[4] = p22.slice(0,1);
    for (let i = 1; i < 5; i++){
        switch(num[i]){
            case "2": 
                num[i] = 0;
                break;
            case "3": 
                num[i] = 1;
                break;
            case "4": 
                num[i] = 2;
                break;
            case "5": 
                num[i] = 3;
                break;
            case "6": 
                num[i] = 4;
                break;
            case "7": 
                num[i] = 5;
                break;
            case "8": 
                num[i] = 6;
                break;
            case "9": 
                num[i] = 7;
                break;
            case "T": 
                num[i] = 8;
                break;
            case "J": 
                num[i] = 9;
                break;
            case "Q": 
                num[i] = 10;
                break;
            case "K": 
                num[i] = 11;
                break;
            case "A": 
                num[i] = 12;
                break;
            default:
                num[i] = 0;
        }
        if (num[1]>num[3] || num[1]>num[4] || num[2]>num[3] || num[2]>num[4]){
            return 1;
        } else if (num[1]<num[3] || num[1]<num[4] || num[2]<num[3] || num[2]<num[4]){
            return 2;
        } else if (num[1]==num[3] || num[1]==num[4] || num[2]==num[3] || num[2]==num[4]){
            return 3;
        }
    }
}

function isNotBankrupt(money, type){
    if(type == "bet"){
        if (money < 20) {return false} else {return true};
    } else if(type == "raise"){
        if (money < 40) {return false} else {return true};
    } else if(type == "call"){
        if (money < 40) {return false} else {return true};
    } else if(type == "entry"){
        if (money < 10) {return false} else {return true};
    }
}