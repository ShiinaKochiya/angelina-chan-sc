const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "challenge",
    description: "show bot help",

    async run(message, args, client) {
        if (message.author.bot) return;
        var banner = "standard"
        var i = 0
        let op = ['0']
        var tct = args.slice(1).join(" ");
        var cm = args.slice(2).join(" ");
        var tl = tct.length - cm.length + 1;
        var tc = tct.substr(0, tl);
        if(tct === ""){var tc = "12"};
        if (parseInt(tc)<1){var tc="13"}
        if (parseInt(tc)>12){message.reply('You have provided an invalid roster limit number')} else {
        if (cm ===""){var cm = "yes"}
        if (cm === "yes"){
            var cmran = Math.floor(Math.random() * 100)+1;
            if (cmran < 50){var cma = "Yes"} else {var cma = "No"}
        }
        //welp this is where the op randomizer work, I fucking hate this
        //Why do I even do this...
        while (i<20){
            var numba = Math.floor(Math.random() * 100)+1;
            if (banner === "standard") {
                //3 stars
                if (numba < 40){
                    var result = Math.floor(Math.random() * 17)+1;
                    switch (result){
                        case result = 1: 
                            var newLength = op.push("[★★★]               Fang");
                            break;
                        case result = 2:
                            var newLength = op.push("[★★★]               Vanilla");
                            break;
                        case result = 3:
                            var newLength = op.push("[★★★]               Plume");
                            break;
                        case result = 4:
                            var newLength = op.push("[★★★]               Hibiscus");
                            break;
                        case result = 5:
                            var newLength = op.push("[★★★]               Ansel");
                            break;
                        case reulst = 6:
                            var newLength = op.push("[★★★]               Lava");
                            break;
                        case result = 7:
                            var newLength = op.push("[★★★]               Steward");
                            break;
                        case result = 8:
                            var newLength = op.push("[★★★]               Kroos");
                            break;
                        case result = 9:
                            var newLength = op.push("[★★★]               Adnachiel");
                            break;
                        case result = 10:
                            var newLength = op.push("[★★★]               Orchid");
                            break;
                        case result = 11:
                            var newLength = op.push("[★★★]               Melantha");
                            break;
                        case result = 12:
                            var newLength = op.push("[★★★]               Beagle");
                            break;
                        case result = 13:
                            var newLength = op.push("[★★★]               Cardigan");
                            break;
                        case result = 14:
                            var newLength = op.push("[★★★]               Catapult");
                            break;
                        case result = 15:
                            var newLength = op.push("[★★★]               Midnight");
                            break;
                        case result = 16:
                            var newLength = op.push("[★★★]               Popukar");
                            break;
                        default:
                            var newLength = op.push("[★★★]               Spot");
                            
                    }
                } //4 stars
                    else if (numba < 90){
                    var result = Math.floor(Math.random() * 47)+1;
                    switch (result){
                        case result = 1:
                            var newLength = op.push("[★★★★]           Scavenger");
                            break;
                        case result = 2:
                            var newLength = op.push("[★★★★]           Vigna");
                            break;
                        case result = 3:
                            var newLength = op.push("[★★★★]           Myrrh");
                            break;
                        case reulst = 4:
                            var newLength = op.push("[★★★★]           Perfumer");
                            break;
                        case result = 5:
                            var newLength = op.push("[★★★★]           Haze");
                            break;
                        case result = 6:
                            var newLength = op.push("[★★★★]           Gitano");
                            break;
                        case result = 7:
                            var newLength = op.push("[★★★★]           Gravel");
                            break;
                        case result = 8:
                            var newLength = op.push("[★★★★]           Rope");
                            break;
                        case result = 9:
                            var newLength = op.push("[★★★★]           Shaw");
                            break;
                        case result = 10:
                            var newLength = op.push("[★★★★]           Shirayuki");
                            break;
                        case result = 11:
                            var newLength = op.push("[★★★★]           Meteor");
                            break;
                        case result = 12:
                            var newLength = op.push("[★★★★]           Jessica");
                            break;
                        case result = 13:
                            var newLength = op.push("[★★★★]           Deepcolor");
                            break;
                        case result = 14:
                            var newLength = op.push("[★★★★]           Earthspirit");
                            break;
                        case result = 15:
                            var newLength = op.push("[★★★★]           Dobermann");
                            break;
                        case result = 16:
                            var newLength = op.push("[★★★★]           Beehunter");
                            break;
                        case result = 17:
                            var newLength = op.push("[★★★★]           Mousse");
                            break;
                        case result = 18:
                            var newLength = op.push("[★★★★]           Frostleaf");
                            break;
                        case result = 19:
                            var newLength = op.push("[★★★★]           Matoimaru");
                            break;
                        case result = 20:
                            var newLength = op.push("[★★★★]           Cuora");
                            break;
                        case result = 21:
                            var newLength = op.push("[★★★★]           Gummy");
                            break;
                        case result = 22:
                            var newLength = op.push("[★★★★]           Matterhorn");
                            break;
                        case result = 23:
                            var newLength = op.push("[★★★★]           Greyy");
                            break;
                        case result = 24:
                            var newLength = op.push("[★★★★]           Sussurro");
                            break;
                        case result = 25:
                            var newLength = op.push("[★★★★]           Myrtle");
                            break;
                        case result = 26:
                            var newLength = op.push("[★★★★]           Vermiel");
                            break;
                        case result = 27:
                            var newLength = op.push("[★★★★]           May");
                            break;
                        case result = 28:
                            var newLength = op.push("[★★★★]           Ambriel");
                            break;
                        case result = 29:
                            var newLength = op.push("[★★★★]           Utage");
                            break;
                        case result = 30:
                            var newLength = op.push("[★★★★]           Cutter");
                            break;
                        case result = 31:
                            var newLength = op.push("[★★★★]           Podenco");
                            break;
                        case result = 32:
                            var newLength = op.push("[★★★★]           Click");
                            break;
                        case result = 33:
                            var newLength = op.push("[★★★★]           Jaye");
                            break;
                        case result = 34:
                            var newLength = op.push("[★★★★]           Aciddrop");
                            break;
                        case result = 35:
                            var newLength = op.push("[★★★★]           Arene");
                            break;
                        case result = 36:
                            var newLength = op.push("[★★★★]           Bubble");
                            break;
                        case result = 37:
                            var newLength = op.push("[★★★★]           Jackie");
                            break;
                        case result = 38:
                            var newLength = op.push("[★★★★]           Pinecone");
                            break;
                        case result = 39:
                            var newLength = op.push("[★★★★]           Courier");
                            break;
                        case result = 40:
                            var newLength = op.push("[★★★★]           Gavial");
                            break;
                        case result = 41:
                            var newLength = op.push("[★★★★]           Conviction");
                            break;
                        case result = 42:
                            var newLength = op.push("[★★★★]           Purestream");
                            break;
                        case result = 43:
                            var newLength = op.push("[★★★★]           Indigo");
                            break;
                        case result = 44:
                            var newLength = op.push("[★★★★]           Ethan");
                            break;
                        case result = 45:
                            var newLength = op.push("[★★★★]           Estelle");
                            break;
                        case result = 46:
                            var newLength = op.push("[★★★★]           Dun-nar");
                            break;
                        default:
                            var newLength = op.push("[★★★★]           Beanstalk");
                    }
                } //5 stars
                    else if (numba < 98){
                        var result = Math.floor(Math.random() * 83)+1;
                        switch (result){
                            case result = 1: 
                                var newLength = op.push("[★★★★★]       Ptilopsis");
                                break;
                            case result = 2:
                                var newLength = op.push("[★★★★★]       Zima");
                                break;
                            case result = 3:
                                var newLength = op.push("[★★★★★]       Texas");
                                break;
                            case result = 4:
                                var newLength = op.push("[★★★★★]       Franka");
                                break;
                            case result = 5:
                                var newLength = op.push("[★★★★★]       Lappland");
                                break;
                            case result = 6:
                                var newLength = op.push("[★★★★★]       Specter");
                                break;
                            case result = 7:
                                var newLength = op.push("[★★★★★]       Blue Poison");
                                break;
                            case result = 8:
                                var newLength = op.push("[★★★★★]       Platinum");
                                break;
                            case result = 9:
                                var newLength = op.push("[★★★★★]       Meteorite");
                                break;
                            case result = 10:
                                var newLength = op.push("[★★★★★]       Skyfire");
                                break;
                            case result = 11:
                                var newLength = op.push("[★★★★★]       Mayer");
                                break;
                            case result = 12:
                                var newLength = op.push("[★★★★★]       Silence");
                                break;
                            case result = 13:
                                var newLength = op.push("[★★★★★]       Warfarin");
                                break;
                            case result = 14:
                                var newLength = op.push("[★★★★★]       Nearl");
                                break;
                            case result = 15:
                                var newLength = op.push("[★★★★★]       Projekt Red");
                                break;
                            case result = 16:
                                var newLength = op.push("[★★★★★]       Liskarm");
                                break;
                            case result = 17:
                                var newLength = op.push("[★★★★★]       Croissant");
                                break;
                            case result = 18:
                                var newLength = op.push("[★★★★★]       Provence");
                                break;
                            case result = 19:
                                var newLength = op.push("[★★★★★]       Firewatch");
                                break;
                            case result = 20:
                                var newLength = op.push("[★★★★★]       Cliffheart");
                                break;
                            case result = 21:
                                var newLength = op.push("[★★★★★]       Pramanix");
                                break;
                            case result = 22:
                                var newLength = op.push("[★★★★★]       Istina");
                                break;
                            case result = 23:
                                var newLength = op.push("[★★★★★]       Sora");
                                break;
                            case result = 24:
                                var newLength = op.push("[★★★★★]       Manticore");
                                break;
                            case result = 25:
                                var newLength = op.push("[★★★★★]       FEater");
                                break;
                            case result = 26:
                                var newLength = op.push("[★★★★★]       Nightmare");
                                break;
                            case result = 27:
                                var newLength = op.push("[★★★★★]       Swire");
                                break;
                            case result = 28:
                                var newLength = op.push("[★★★★★]       Executor");
                                break;
                            case result = 29:
                                var newLength = op.push("[★★★★★]       Astesia");
                                break;
                            case result = 30:
                                var newLength = op.push("[★★★★★]       Glaucus");
                                break;
                            case result = 31:
                                var newLength = op.push("[★★★★★]       Waai Fu");
                                break;
                            case result = 32:
                                var newLength = op.push("[★★★★★]       GreyThroat");
                                break;
                            case result = 33:
                                var newLength = op.push("[★★★★★]       Reed");
                                break;
                            case result = 34:
                                var newLength = op.push("[★★★★★]       Broca");
                                break;
                            case result = 35:
                                var newLength = op.push("[★★★★★]       Hung");
                                break;
                            case result = 36:
                                var newLength = op.push("[★★★★★]       Leizi");
                                break;
                            case result = 37:
                                var newLength = op.push("[★★★★★]       Sesa");
                                break;
                            case result = 38:
                                var newLength = op.push("[★★★★★]       Leonhardt");
                                break;
                            case result = 39:
                                var newLength = op.push("[★★★★★]       Ayerscarpe");
                                break;
                            case result = 40:
                                var newLength = op.push("[★★★★★]       Asbestos");
                                break;
                            case result = 41:
                                var newLength = op.push("[★★★★★]       Tsukinogi");
                                break;
                            case result = 42:
                                var newLength = op.push("[★★★★★]       Beeswax");
                                break;
                            case result = 43:
                                var newLength = op.push("[★★★★★]       Chiave");
                                break;
                            case result = 44:
                                var newLength = op.push("[★★★★★]       Shamare");
                                break;
                            case result = 45:
                                var newLength = op.push("[★★★★★]       Elysium");
                                break;
                            case result = 46:
                                var newLength = op.push("[★★★★★]       Andreana");
                                break;
                            case result = 47:
                                var newLength = op.push("[★★★★★]       Flint");
                                break;
                            case result = 48:
                                var newLength = op.push("[★★★★★]       April");
                                break;
                            case result = 49:
                                var newLength = op.push("[★★★★★]       Whisperain");
                                break;
                            case result = 50:
                                var newLength = op.push("[★★★★★]       Kafka");
                                break;
                            case result = 51:
                                var newLength = op.push("[★★★★★]       Iris");
                                break;
                            case result = 52:
                                var newLength = op.push("[★★★★★]       Aosta");
                                break;
                            case result = 53:
                                var newLength = op.push("[★★★★★]       Mr.Nothing");
                                break;
                            case result = 54:
                                var newLength = op.push("[★★★★★]       Akafuyu");
                                break;
                            case result = 55:
                                var newLength = op.push("[★★★★★]       Savage");
                                break;
                            case result = 56:
                                var newLength = op.push("[★★★★★]       Amiya");
                                break;
                            case result = 57:
                                var newLength = op.push("[★★★★★]       Indra");
                                break;
                            case result = 58:
                                var newLength = op.push("[★★★★★]       Vulcan");
                                break;
                            case result = 59:
                                var newLength = op.push("[★★★★★]       Granii");
                                break;
                            case result = 60:
                                var newLength = op.push("[★★★★★]       Ceylon");
                                break;
                            case result = 61:
                                var newLength = op.push("[★★★★★]       FlameBringer");
                                break;
                            case result = 62:
                                var newLength = op.push("[★★★★★]       Breeze ");
                                break;
                            case result = 63:
                                var newLength = op.push("[★★★★★]       Bison");
                                break;
                            case result = 64:
                                var newLength = op.push("[★★★★★]       Snowsant");
                                break;
                            case result = 65:
                                var newLength = op.push("[★★★★★]       Bibeak");
                                break;
                            case result = 66:
                                var newLength = op.push("[★★★★★]       Sideroca");
                                break;
                            case result = 67:
                                var newLength = op.push("[★★★★★]       Absinthe");
                                break;
                            case result = 68:
                                var newLength = op.push("[★★★★★]       Folinic");
                                break;
                            case result = 69:
                                var newLength = op.push("[★★★★★]       Scene");
                                break;
                            case result = 70:
                                var newLength = op.push("[★★★★★]       Tomimi");
                                break;
                            case result = 71:
                                var newLength = op.push("[★★★★★]       Wishlash");
                                break;
                            case result = 72:
                                var newLength = op.push("[★★★★★]       Robin");
                                break;
                            case result = 73:
                                var newLength = op.push("[★★★★★]       Tuye");
                                break;
                            case result = 74:
                                var newLength = op.push("[★★★★★]       Lava the Pugatory");
                                break;
                            case result = 75:
                                var newLength = op.push("[★★★★★]       Mr.Nothing");
                                break;
                            case result = 76:
                                var newLength = op.push("[★★★★★]       Frost");
                                break;
                            case result = 77:
                                var newLength = op.push("[★★★★★]       Blitz");
                                break;
                            case result = 78:
                                var newLength = op.push("[★★★★★]       Tachanka");
                                break;
                            case result = 79:
                                var newLength = op.push("[★★★★★]       Heavyrain");
                                break;
                            case result = 80:
                                var newLength = op.push("[★★★★★]       Bena");
                                break;
                            case result = 81:
                                var newLength = op.push("[★★★★★]       Tequila");
                                break;
                            case result = 82:
                                var newLength = op.push("[★★★★★]       Mint");
                                break;
                            default:
                                var newLength = op.push("[★★★★★]       Kirara");
                                break;
                        }
                    } // 6 stars
                    else {var result = Math.floor(Math.random() * 45)+1;
                        switch (result){
                            case result = 1: 
                                var newLength = op.push("**[★★★★★★]   Ch'en**");
                                break;
                            case result = 2: 
                                var newLength = op.push("**[★★★★★★]   Siege**");
                                break;
                            case result = 3: 
                                var newLength = op.push("**[★★★★★★]   Shining**");
                                break;
                            case result = 4: 
                                var newLength = op.push("**[★★★★★★]   Nightingale**");
                                break;
                            case result = 5: 
                                var newLength = op.push("**[★★★★★★]   Ifrit**");
                                break;
                            case result = 6: 
                                var newLength = op.push("**[★★★★★★]   Eyjafjalla**");
                                break;
                            case result = 7: 
                                var newLength = op.push("**[★★★★★★]   Exusiai**");
                                break;
                            case result = 8: 
                                var newLength = op.push("**[★★★★★★]   Angelina**");
                                break;
                            case result = 9: 
                                var newLength = op.push("**[★★★★★★]   SilverAsh**");
                                break;
                            case result = 10: 
                                var newLength = op.push("**[★★★★★★]   Hoshiguma**");
                                break;
                            case result = 11: 
                                var newLength = op.push("**[★★★★★★]   Saria**");
                                break;
                            case result = 12: 
                                var newLength = op.push("**[★★★★★★]   Skadi**");
                                break;
                            case result = 13: 
                                var newLength = op.push("**[★★★★★★]   Schwarz**");
                                break;
                            case result = 14: 
                                var newLength = op.push("**[★★★★★★]   Hellagur**");
                                break;
                            case result = 15: 
                                var newLength = op.push("**[★★★★★★]   Magallan**");
                                break;
                            case result = 16: 
                                var newLength = op.push("**[★★★★★★]   Mostima**");
                                break;
                            case result = 17: 
                                var newLength = op.push("**[★★★★★★]   Blaze**");
                                break;
                            case result = 18: 
                                var newLength = op.push("**[★★★★★★]   Aak**");
                                break;
                            case result = 19: 
                                var newLength = op.push("**[★★★★★★]   Ceobe**");
                                break;
                            case result = 20: 
                                var newLength = op.push("**[★★★★★★]   Bagpipe**");
                                break;
                            case result = 21: 
                                var newLength = op.push("**[★★★★★★]   Phantom**");
                                break;
                            case result = 22: 
                                var newLength = op.push("**[★★★★★★]   Weedy**");
                                break;
                            case result = 23: 
                                var newLength = op.push("**[★★★★★★]   Poca**");
                                break;
                            case result = 24: 
                                var newLength = op.push("**[★★★★★★]   Suzuran**");
                                break;
                            case result = 25: 
                                var newLength = op.push("**[★★★★★★]   Thorns**");
                                break;
                            case result = 26: 
                                var newLength = op.push("**[★★★★★★]   Eunectes**");
                                break;
                            case result = 27: 
                                var newLength = op.push("**[★★★★★★]   Surtr**");
                                break;
                            case result = 28: 
                                var newLength = op.push("**[★★★★★★]   Blemishine**");
                                break;
                            case result = 29: 
                                var newLength = op.push("**[★★★★★★]   Mudrock**");
                                break;
                            case result = 30: 
                                var newLength = op.push("**[★★★★★★]   Mountain**");
                                break;
                            case result = 31: 
                                var newLength = op.push("**[★★★★★★]   Archetto**");
                                break;
                            case result = 32: 
                                var newLength = op.push("**[★★★★★★]   Saga**");
                                break;
                            case result = 33: 
                                var newLength = op.push("**[★★★★★★]   Passenger**");
                                break;
                            case result = 34: 
                                var newLength = op.push("**[★★★★★★]   Kal'tsit**");
                                break;
                            case result = 35:
                                var newLength = op.push("**[★★★★★★]   W**");
                                break;
                            case result = 36:
                                var newLength = op.push("**[★★★★★★]   Nian**");
                                break;
                            case result = 37:
                                var newLength = op.push("**[★★★★★★]   Rosmontis**");
                                break;
                            case result = 38:
                                var newLength = op.push("**[★★★★★★]   Dusk**");
                                break;
                            case result = 39:
                                var newLength = op.push("**[★★★★★★]   Ash**");
                                break;
                            case result = 40:
                                var newLength = op.push("**[★★★★★★]   Skadi the Corrupting Heart**");
                                break;
                            case result = 41:
                                var newLength = op.push("**[★★★★★★]   Gladiia**");
                                break;
                            case result = 42:
                                var newLength = op.push("**[★★★★★★]   Palas**");
                                break;
                            case result = 43:
                                var newLength = op.push("**[★★★★★★]   Ch'en the Holungday**");
                                break;
                            case result = 44:
                                var newLength = op.push("**[★★★★★★]   Mizuki**");
                                break;
                            default:
                                var newLength = op.push("**[★★★★★★]   Carnelian**");
                                break;
                        }}
            } else {
                message.reply('You have provided an invalid banner')
                i = 50
            }
        i = i + 1
        }
        //another painful part
        //Stage randomizer
        //god I fucking hate this ;-;
        var staran = Math.floor(Math.random() * 45)+1;
        switch (staran){
        case staran = 1: var stage = "0-1"; break;
        case staran = 2: var stage = "0-2"; break;
        case staran = 3: var stage = "0-3"; break;
        case staran = 4: var stage = "0-4"; break;
        case staran = 5: var stage = "0-5"; break;
        case staran = 6: var stage = "0-6"; break;
        case staran = 7: var stage = "0-7"; break;
        case staran = 8: var stage = "0-8"; break;
        case staran = 9: var stage = "0-9"; break;
        case staran = 10: var stage = "0-10"; break;
        case staran = 11: var stage = "0-11"; break;
        case staran = 12: var stage = "1-1"; break;
        case staran = 13: var stage = "1-2"; break;
        case staran = 14: var stage = "1-3"; break;
        case staran = 15: var stage = "1-4"; break;
        case staran = 16: var stage = "1-5"; break;
        case staran = 17: var stage = "1-6"; break;
        case staran = 18: var stage = "1-7"; break;
        case staran = 19: var stage = "1-8"; break;
        case staran = 20: var stage = "1-9"; break;
        case staran = 21: var stage = "1-10"; break;
        case staran = 22: var stage = "1-11"; break;
        case staran = 23: var stage = "1-12"; break;
        case staran = 24: var stage = "2-1"; break;
        case staran = 25: var stage = "S2-1"; break;
        case staran = 26: var stage = "2-2"; break;
        case staran = 27: var stage = "S2-2"; break;
        case staran = 28: var stage = "S2-3"; break;
        case staran = 29: var stage = "S2-4"; break;
        case staran = 30: var stage = "2-3"; break;
        case staran = 31: var stage = "2-4"; break;
        case staran = 32: var stage = "S2-5"; break;
        case staran = 33: var stage = "S2-6"; break;
        case staran = 34: var stage = "S2-7"; break;
        case staran = 35: var stage = "2-5"; break;
        case staran = 36: var stage = "2-6"; break;
        case staran = 37: var stage = "2-7"; break;
        case staran = 38: var stage = "S2-8"; break;
        case staran = 39: var stage = "S2-9"; break;
        case staran = 40: var stage = "2-8"; break;
        case staran = 41: var stage = "2-9"; break;
        case staran = 42: var stage = "S2-10"; break;
        case staran = 43: var stage = "S2-11"; break;
        case staran = 44: var stage = "S2-12"; break;
        case staran = 45: var stage = "2-10"; break;
        case staran = 46: var stage = "3-1"; break;
        case staran = 47: var stage = "3-2"; break;
        case staran = 48: var stage = "3-3"; break;
        case staran = 49: var stage = "S3-1"; break;
        case staran = 50: var stage = "S3-2"; break;
        case staran = 51: var stage = "3-4"; break;
        case staran = 52: var stage = "3-5"; break;
        case staran = 53: var stage = "3-6"; break;
        case staran = 54: var stage = "3-7"; break;
        case staran = 55: var stage = "3-8"; break;
        case staran = 56: var stage = "S3-3"; break;
        case staran = 57: var stage = "S3-4"; break;
        case staran = 58: var stage = "S3-5"; break;
        case staran = 59: var stage = "S3-6"; break;
        case staran = 60: var stage = "S3-7"; break;
        case staran = 61: var stage = "4-1"; break;
        case staran = 62: var stage = "4-2"; break;
        case staran = 63: var stage = "4-3"; break;
        case staran = 64: var stage = "S4-1"; break;
        case staran = 65: var stage = "S4-2"; break;
        case staran = 66: var stage = "S4-3"; break;
        case staran = 67: var stage = "4-4"; break;
        case staran = 68: var stage = "4-5"; break;
        case staran = 69: var stage = "4-6"; break;
        case staran = 70: var stage = "S4-4"; break;
        case staran = 71: var stage = "S4-5"; break;
        case staran = 72: var stage = "S4-6"; break;
        case staran = 73: var stage = "4-7"; break;
        case staran = 74: var stage = "4-8"; break;
        case staran = 75: var stage = "4-9"; break;
        case staran = 76: var stage = "4-10"; break;
        case staran = 77: var stage = "S4-7"; break;
        case staran = 78: var stage = "S4-8"; break;
        case staran = 79: var stage = "S4-9"; break;
        case staran = 80: var stage = "S4-10"; break;
        case staran = 81: var stage = "5-1"; break;
        case staran = 82: var stage = "5-2"; break;
        case staran = 83: var stage = "S5-1"; break;
        case staran = 84: var stage = "S5-2"; break;
        case staran = 85: var stage = "5-3"; break;
        case staran = 86: var stage = "5-4"; break;
        case staran = 87: var stage = "5-5"; break;
        case staran = 88: var stage = "5-6"; break;
        case staran = 89: var stage = "S5-3"; break;
        case staran = 90: var stage = "S5-4"; break;
        case staran = 91: var stage = "5-7"; break;
        case staran = 92: var stage = "5-8"; break;
        case staran = 93: var stage = "5-9"; break;
        case staran = 94: var stage = "S5-5"; break;
        case staran = 95: var stage = "S5-6"; break;
        case staran = 96: var stage = "S5-7"; break;
        case staran = 97: var stage = "S5-8"; break;
        case staran = 98: var stage = "S5-9"; break;
        case staran = 99: var stage = "5-10"; break;
        case staran = 100: var stage = "H5-1"; break;
        case staran = 101: var stage = "H5-2"; break;
        case staran = 102: var stage = "H5-3"; break;
        case staran = 103: var stage = "H5-4"; break;
        case staran = 104: var stage = "6-1"; break;
        case staran = 105: var stage = "6-2"; break;
        case staran = 106: var stage = "6-3"; break;
        case staran = 107: var stage = "6-4"; break;
        case staran = 108: var stage = "6-5"; break;
        case staran = 109: var stage = "6-8"; break;
        case staran = 110: var stage = "6-9"; break;
        case staran = 111: var stage = "6-10"; break;
        case staran = 112: var stage = "S6-1"; break;
        case staran = 113: var stage = "S6-2"; break;
        case staran = 114: var stage = "6-11"; break;
        case staran = 115: var stage = "6-12"; break;
        case staran = 116: var stage = "6-14"; break;
        case staran = 117: var stage = "6-15"; break;
        case staran = 118: var stage = "S6-3"; break;
        case staran = 119: var stage = "S6-4"; break;
        case staran = 120: var stage = "6-16"; break;
        case staran = 121: var stage = "H6-1"; break;
        case staran = 122: var stage = "H6-2"; break;
        case staran = 123: var stage = "H6-3"; break;
        case staran = 124: var stage = "H6-4"; break;
        case staran = 125: var stage = "7-2"; break;
        case staran = 126: var stage = "7-3"; break;
        case staran = 127: var stage = "7-4"; break;
        case staran = 128: var stage = "7-5"; break;
        case staran = 129: var stage = "7-6"; break;
        case staran = 130: var stage = "7-8"; break;
        case staran = 131: var stage = "7-9"; break;
        case staran = 132: var stage = "7-10"; break;
        case staran = 133: var stage = "7-11"; break;
        case staran = 134: var stage = "7-12"; break;
        case staran = 135: var stage = "7-13"; break;
        case staran = 136: var stage = "7-14"; break;
        case staran = 137: var stage = "7-15"; break;
        case staran = 138: var stage = "7-16"; break;
        case staran = 139: var stage = "S7-1"; break;
        case staran = 140: var stage = "S7-2"; break;
        case staran = 141: var stage = "7-17"; break;
        case staran = 142: var stage = "7-18"; break;
        case staran = 143: var stage = "H7-1"; break;
        case staran = 144: var stage = "H7-2"; break;
        case staran = 145: var stage = "H7-3"; break;
        case staran = 146: var stage = "H7-4"; break;
        case staran = 147: var stage = "R8-1"; break;
        case staran = 148: var stage = "R8-2"; break;
        case staran = 149: var stage = "R8-3"; break;
        case staran = 150: var stage = "R8-4"; break;
        case staran = 151: var stage = "R8-5"; break;
        case staran = 152: var stage = "R8-6"; break;
        case staran = 153: var stage = "R8-7"; break;
        case staran = 154: var stage = "R8-8"; break;
        case staran = 155: var stage = "M8-6"; break;
        case staran = 156: var stage = "M8-7"; break;
        case staran = 157: var stage = "M8-8"; break;
        case staran = 158: var stage = "R8-9"; break;
        case staran = 159: var stage = "R8-10"; break;
        case staran = 160: var stage = "R8-11"; break;
        case staran = 161: var stage = "JT8-2"; break;
        case staran = 162: var stage = "JT8-3"; break;
        case staran = 163: var stage = "H8-1"; break;
        case staran = 164: var stage = "H8-2"; break;
        case staran = 165: var stage = "H8-3"; break;
        case staran = 166: var stage = "H8-4"; break;
        case staran = 167: var stage = "LS-1"; break;
        case staran = 168: var stage = "LS-2"; break;
        case staran = 169: var stage = "LS-3"; break;
        case staran = 170: var stage = "LS-4"; break;
        case staran = 171: var stage = "LS-5"; break;
        case staran = 172: var stage = "AP-1"; break;
        case staran = 173: var stage = "AP-2"; break;
        case staran = 174: var stage = "AP-3"; break;
        case staran = 175: var stage = "AP-4"; break;
        case staran = 176: var stage = "AP-5"; break;
        case staran = 177: var stage = "CE-1"; break;
        case staran = 178: var stage = "CE-2"; break;
        case staran = 179: var stage = "CE-3"; break;
        case staran = 180: var stage = "CE-4"; break;
        case staran = 181: var stage = "CE-5"; break;
        case staran = 182: var stage = "CA-1"; break;
        case staran = 183: var stage = "CA-2"; break;
        case staran = 184: var stage = "CA-3"; break;
        case staran = 185: var stage = "CA-4"; break;
        case staran = 186: var stage = "CA-5"; break;
        case staran = 187: var stage = "SK-1"; break;
        case staran = 188: var stage = "SK-2"; break;
        case staran = 189: var stage = "SK-3"; break;
        case staran = 190: var stage = "SK-4"; break;
        case staran = 191: var stage = "SK-5"; break;
        case staran = 192: var stage = "PR-A-1"; break;
        case staran = 193: var stage = "PR-A-2"; break;
        case staran = 194: var stage = "PR-B-1"; break;
        case staran = 195: var stage = "PR-B-2"; break;
        case staran = 196: var stage = "PR-C-1"; break;
        case staran = 197: var stage = "PR-C-2"; break;
        case staran = 198: var stage = "PR-D-1"; break;
        case staran = 199: var stage = "PR-D-2"; break;
        case staran = 200: var stage = "DM-1"; break;
        case staran = 201: var stage = "DM-2"; break;
        case staran = 202: var stage = "DM-3"; break;
        case staran = 203: var stage = "DM-4"; break;
        case staran = 204: var stage = "DM-5"; break;
        case staran = 205: var stage = "DM-6"; break;
        case staran = 206: var stage = "DM-7"; break;
        case staran = 207: var stage = "DM-8"; break;
        case staran = 208: var stage = "DM-EX-1"; break;
        case staran = 209: var stage = "DM-EX-2"; break;
        case staran = 210: var stage = "DM-EX-3"; break;
        case staran = 211: var stage = "DM-EX-4"; break;
        case staran = 212: var stage = "DM-EX-5"; break;
        case staran = 213: var stage = "DM-EX-6"; break;
        case staran = 214: var stage = "DM-EX-7"; break;
        case staran = 215: var stage = "DM-EX-8"; break;
        case staran = 216: var stage = "WD-1"; break;
        case staran = 217: var stage = "WD-2"; break;
        case staran = 218: var stage = "WD-3"; break;
        case staran = 219: var stage = "WD-4"; break;
        case staran = 220: var stage = "WD-5"; break;
        case staran = 221: var stage = "WD-6"; break;
        case staran = 222: var stage = "WD-7"; break;
        case staran = 223: var stage = "WD-8"; break;
        case staran = 224: var stage = "WD-EX-1"; break;
        case staran = 225: var stage = "WD-EX-2"; break;
        case staran = 226: var stage = "WD-EX-3"; break;
        case staran = 227: var stage = "WD-EX-4"; break;
        case staran = 228: var stage = "WD-EX-5"; break;
        case staran = 229: var stage = "WD-EX-6"; break;
        case staran = 230: var stage = "WD-EX-7"; break;
        case staran = 231: var stage = "WD-EX-8"; break;
        case staran = 232: var stage = "SV-1"; break;
        case staran = 233: var stage = "SV-2"; break;
        case staran = 234: var stage = "SV-3"; break;
        case staran = 235: var stage = "SV-4"; break;
        case staran = 236: var stage = "SV-5"; break;
        case staran = 237: var stage = "SV-6"; break;
        case staran = 238: var stage = "SV-7"; break;
        case staran = 239: var stage = "SV-8"; break;
        case staran = 240: var stage = "SV-EX-1"; break;
        case staran = 241: var stage = "SV-EX-2"; break;
        case staran = 242: var stage = "SV-EX-3"; break;
        case staran = 243: var stage = "SV-EX-4"; break;
        case staran = 244: var stage = "SV-EX-5"; break;
        case staran = 245: var stage = "SV-EX-6"; break;
        case staran = 246: var stage = "SV-EX-7"; break;
        case staran = 247: var stage = "SV-EX-8"; break;
        case staran = 248: var stage = "SV-9"; break;
        case staran = 249: var stage = "GT-1"; break;
        case staran = 250: var stage = "GT-2"; break;
        case staran = 251: var stage = "GT-3"; break;
        case staran = 252: var stage = "GT-4"; break;
        case staran = 253: var stage = "GT-5"; break;
        case staran = 254: var stage = "GT-6"; break;
        case staran = 255: var stage = "GT-EX-1"; break;
        case staran = 256: var stage = "GT-EX-2"; break;
        case staran = 257: var stage = "GT-EX-3"; break;
        case staran = 258: var stage = "GT-HX-1"; break;
        case staran = 259: var stage = "GT-HX-2"; break;
        case staran = 260: var stage = "GT-HX-3"; break;
        case staran = 261: var stage = "OF-1"; break;
        case staran = 262: var stage = "OF-2"; break;
        case staran = 263: var stage = "OF-3"; break;
        case staran = 264: var stage = "OF-4"; break;
        case staran = 265: var stage = "OF-5"; break;
        case staran = 266: var stage = "OF-6"; break;
        case staran = 267: var stage = "OF-7"; break;
        case staran = 268: var stage = "OF-8"; break;
        case staran = 269: var stage = "OF-F1"; break;
        case staran = 270: var stage = "OF-F2"; break;
        case staran = 271: var stage = "OF-F3"; break;
        case staran = 272: var stage = "OF-F4"; break;
        case staran = 273: var stage = "OF-EX-1"; break;
        case staran = 274: var stage = "OF-EX-2"; break;
        case staran = 275: var stage = "OF-EX-3"; break;
        case staran = 276: var stage = "OF-EX-4"; break;
        case staran = 277: var stage = "OF-EX-5"; break;
        case staran = 278: var stage = "OF-EX-6"; break;
        case staran = 279: var stage = "CB-1"; break;
        case staran = 280: var stage = "CB-2"; break;
        case staran = 281: var stage = "CB-3"; break;
        case staran = 282: var stage = "CB-4"; break;
        case staran = 283: var stage = "CB-5"; break;
        case staran = 284: var stage = "CB-6"; break;
        case staran = 285: var stage = "CB-7"; break;
        case staran = 286: var stage = "CB-8"; break;
        case staran = 287: var stage = "CB-9"; break;
        case staran = 288: var stage = "CB-10"; break;
        case staran = 289: var stage = "CB-EX-1"; break;
        case staran = 290: var stage = "CB-EX-2"; break;
        case staran = 291: var stage = "CB-EX-3"; break;
        case staran = 292: var stage = "CB-EX-4"; break;
        case staran = 293: var stage = "CB-EX-5"; break;
        case staran = 294: var stage = "CB-EX-6"; break;
        case staran = 295: var stage = "CB-EX-7"; break;
        case staran = 296: var stage = "CB-EX-8"; break;
        case staran = 297: var stage = "TW-1"; break;
        case staran = 298: var stage = "TW-2"; break;
        case staran = 299: var stage = "TW-3"; break;
        case staran = 300: var stage = "TW-4"; break;
        case staran = 301: var stage = "TW-5"; break;
        case staran = 302: var stage = "TW-6"; break;
        case staran = 303: var stage = "TW-7"; break;
        case staran = 304: var stage = "TW-8"; break;
        case staran = 305: var stage = "TW-S-1"; break;
        case staran = 306: var stage = "TW-S-2"; break;
        case staran = 307: var stage = "TW-EX-1"; break;
        case staran = 308: var stage = "TW-EX-2"; break;
        case staran = 309: var stage = "TW-EX-3"; break;
        case staran = 310: var stage = "TW-EX-4"; break;
        case staran = 311: var stage = "TW-EX-5"; break;
        case staran = 312: var stage = "TW-EX-6"; break;
        case staran = 313: var stage = "TW-EX-7"; break;
        default: var stage = "TW-EX-8"; break;}
        
        if (cm === "yes"){
            switch (tc){
            case tc = "12":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n${op[10]}\n${op[11]}\n${op[12]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`);
                break;
            case tc="11":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n${op[10]}\n${op[11]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`);
                break;
            case tc = "10":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n${op[10]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "9":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "8":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "7":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "6":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "5":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "4":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "3":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n${op[3]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "2":
                message.reply(`Operators:\n${op[1]}\n${op[2]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;
            case tc = "1":
                message.reply(`Operators:\n${op[1]}\n\nStage: ${stage}\n\nChallenge mode: ${cma}`)
                break;    
            }
        }``
      }
 
}});
