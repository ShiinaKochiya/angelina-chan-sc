const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "gacha",
    description: "gacha time",

    async run(message, args, client) {
        console.log(message.author.tag,"used a!gacha")
        var banner = args.slice(1).join(" ");
        var i = 1;
        let op = ['0']
        while (i<15){
        var numba = Math.floor(Math.random() * 100)+1;
        if (banner === "standard") {
            //3 stars
            if (numba < 40){
                var result = Math.floor(Math.random() * 17)+1;
                switch (result){
                    case result = 1: 
                        var newLength = op.push("★★★ - Fang");
                        break;
                    case result = 2:
                        var newLength = op.push("★★★ - Vanilla");
                        break;
                    case result = 3:
                        var newLength = op.push("★★★ - Plume");
                        break;
                    case result = 4:
                        var newLength = op.push("★★★ - Hibiscus");
                        break;
                    case result = 5:
                        var newLength = op.push("★★★ - Ansel");
                        break;
                    case reulst = 6:
                        var newLength = op.push("★★★ - Lava");
                        break;
                    case result = 7:
                        var newLength = op.push("★★★ - Steward");
                        break;
                    case result = 8:
                        var newLength = op.push("★★★ - Kroos");
                        break;
                    case result = 9:
                        var newLength = op.push("★★★ - Adnachiel");
                        break;
                    case result = 10:
                        var newLength = op.push("★★★ - Orchid");
                        break;
                    case result = 11:
                        var newLength = op.push("★★★ - Melantha");
                        break;
                    case result = 12:
                        var newLength = op.push("★★★ - Beagle");
                        break;
                    case result = 13:
                        var newLength = op.push("★★★ - Cardigan");
                        break;
                    case result = 14:
                        var newLength = op.push("★★★ - Catapult");
                        break;
                    case result = 15:
                        var newLength = op.push("★★★ - Midnight");
                        break;
                    case result = 16:
                        var newLength = op.push("★★★ - Popukar");
                        break;
                    default:
                        var newLength = op.push("★★★ - Spot");
                        
                }
            } //4 stars
                else if (numba < 90){
                var result = Math.floor(Math.random() * 46)+1;
                switch (result){
                    case result = 1: 
                        var newLength = op.push("★★★★ - Courier");
                        break;
                    case result = 2:
                        var newLength = op.push("★★★★ - Scavenger");
                        break;
                    case result = 3:
                        var newLength = op.push("★★★★ - Vigna");
                        break;
                    case result = 4:
                        var newLength = op.push("★★★★ - Myrrh");
                        break;
                    case result = 5:
                        var newLength = op.push("★★★★ - Gavial");
                        break;
                    case reulst = 6:
                        var newLength = op.push("★★★★ - Perfumer");
                        break;
                    case result = 7:
                        var newLength = op.push("★★★★ - Haze");
                        break;
                    case result = 8:
                        var newLength = op.push("★★★★ - Gitano");
                        break;
                    case result = 9:
                        var newLength = op.push("★★★★ - Gravel");
                        break;
                    case result = 10:
                        var newLength = op.push("★★★★ - Rope");
                        break;
                    case result = 11:
                        var newLength = op.push("★★★★ - Shaw");
                        break;
                    case result = 12:
                        var newLength = op.push("★★★★ - Shirayuki");
                        break;
                    case result = 13:
                        var newLength = op.push("★★★★ - Meteor");
                        break;
                    case result = 14:
                        var newLength = op.push("★★★★ - Jessica");
                        break;
                    case result = 15:
                        var newLength = op.push("★★★★ - Deepcolor");
                        break;
                    case result = 16:
                        var newLength = op.push("★★★★ - Earthspirit");
                        break;
                    case result = 17:
                        var newLength = op.push("★★★★ - Dobermann");
                        break;
                    case result = 17:
                        var newLength = op.push("★★★★ - Estelle");
                        break;
                    case result = 18:
                        var newLength = op.push("★★★★ - Beehunter");
                        break;
                    case result = 19:
                        var newLength = op.push("★★★★ - Mousse");
                        break;
                    case result = 20:
                        var newLength = op.push("★★★★ - Frostleaf");
                        break;
                    case result = 21:
                        var newLength = op.push("★★★★ - Matoimaru");
                        break;
                    case result = 22:
                        var newLength = op.push("★★★★ - Cuora");
                        break;
                    case result = 23:
                        var newLength = op.push("★★★★ - Gummy");
                        break;
                    case result = 24:
                        var newLength = op.push("★★★★ - Matterhorn");
                        break;
                    case result = 25:
                        var newLength = op.push("★★★★ - Greyy");
                        break;
                    case result = 26:
                        var newLength = op.push("★★★★ - Sussurro");
                        break;
                    case result = 27:
                        var newLength = op.push("★★★★ - Myrtle");
                        break;
                    case result = 28:
                        var newLength = op.push("★★★★ - Dur-nar");
                        break;
                    case result = 29:
                        var newLength = op.push("★★★★ - Vermiel");
                        break;
                    case result = 30:
                        var newLength = op.push("★★★★ - Ethan");
                        break;
                    case result = 31:
                        var newLength = op.push("★★★★ - May");
                        break;
                    case result = 32:
                        var newLength = op.push("★★★★ - Ambriel");
                        break;
                    case result = 33:
                        var newLength = op.push("★★★★ - Purestream");
                        break;
                    case result = 34:
                        var newLength = op.push("★★★★ - Utage");
                        break;
                    case result = 35:
                        var newLength = op.push("★★★★ - Cutter");
                        break;
                    case result = 36:
                        var newLength = op.push("★★★★ - Podenco");
                        break;
                    case result = 37:
                        var newLength = op.push("★★★★ - Click");
                        break;
                    case result = 38:
                        var newLength = op.push("★★★★ - Jaye");
                        break;
                    case result = 39:
                        var newLength = op.push("★★★★ - Aciddrop");
                        break;
                    case result = 40:
                        var newLength = op.push("★★★★ - Arene");
                        break;
                    case result = 41:
                        var newLength = op.push("★★★★ - Bubble");
                        break;
                    case result = 42:
                        var newLength = op.push("★★★★ - Jackie");
                        break;
                    case result = 43:
                        var newLength = op.push("★★★★ - Pinecone");
                        break;
                    default:
                        var newLength = op.push("★★★★ - Beanstalk");
                }
            }
        }
    i = i + 1
    }
    message.reply(`Result:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n${op[10]}`)   
  }
});




