const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "ship",
    description: "Lets see how much likely you can marry the other person",

    async run(message, args, client) {
        
        var numba = Math.floor(Math.random() * 100) + 1;
    if (args.slice(2).join(" ")==="") {
        var name = message.author.username
        var l = 0;
        } else {
            var name = args.slice(2).join(" ");
            var l = name.length+1;
        }
    var name2 = args.slice(1).join(" ");
    var te=0
    
    var l2 = name2.length
    var name2 = name2.substr(0, l2-l)
    console.log(message.author.tag,"used a!ship", name2, name)
    if (name2 === 'Angelina'){
        if (name === 'Sakura Kaslana'){
         message.reply(`${name} x ${name2}: 100 %`)
        } else if (name === 'Sakura'){
            message.reply(`${name} x ${name2}: 100 %`)
           } else {var te=1}} else if (name2 === 'W'){
            if (name === 'N1K0'){
             message.reply(`${name} x ${name2}: 100 %`)
        } else {var te=1}} else if (name2 === 'Archetto'){
                if (name === 'Hyngwarus'){
                 message.reply(`${name} x ${name2}: 100 %`)
        } else {var te=1}} else if (name2 === 'Dusk'){
                    if (name === 'FreelanceCash53'){
                     message.reply(`${name} x ${name2}: 100 %`)
        } else {var te=1}}else {var te=1}
    if (te===1) message.reply(`${name2} x ${name}: ${numba} %`)

    }
});
