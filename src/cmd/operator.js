const { MessageFlags } = require("discord.js");
const Command = require("../structures/Command.js");
var op = require('../data/op.json')

module.exports = new Command({
    name: "operator",
    description: "show some operator infos",

    async run(message, args, client) {
        if (message.author.bot) return;
        var opname = args.slice(1).join(" ").toLowerCase()
        if (opname === "skalter"){var opname = "skadi the corrupting heart"}
        if (opname === "chen the holung day"){var opname = "chalter"}
        if (opname === "thermal-ex"){var opname = "thrm-ex"}
        console.log(message.author.tag,"used a!operator", opname)
        //6 stars
        if (opname === "skadi the corrupting heart"){
            message.reply(op.skalter)
        } else if (opname === "w"){
            message.reply(op.w)
        } else if (opname === "angelina"){
            message.reply(op.angelina)
        } else if (opname === "ceobe"){
            message.reply(op.ceobe)
        } else if (opname === "dusk"){
            message.reply(op.dusk)
        }else if (opname === "chen"){
            message.reply(op.chen)
        } else if (opname === "blaze"){
            message.reply(op.blaze)
        } else if (opname === "kaltsit"){
            message.reply(op.kal)
        } else if (opname === "passenger"){
            message.reply(op.godsenger)
        } else if (opname === "chalter"){
            message.reply(op.chalter) 
        } else if (opname === "skadi"){
            message.reply(op.kya) 
        } else if (opname === "mudrock"){
            message.reply(op.mudrock) 
        }
        //5 stars
        //4 stars
        else if (opname === "ambriel"){
            message.reply(op.ambri)
        } 
        //3 stars
        else if (opname === "fang"){
            message.reply(op.fang) 
        } else if (opname === "vanilla"){
            message.reply(op.vani) 
        } else if (opname === "hibiscus"){
            message.reply(op.hibi) 
        } else if (opname === "ansel"){
            message.reply(op.ansel_is_a_trap_wtf) 
        } else if (opname === "lava"){
            message.reply(op.lava) 
        } else if (opname === "plume"){
            message.reply(op.plume) 
        } else if (opname === "steward"){
            message.reply(op.flightsteward) 
        } else if (opname === "kroos"){
            message.reply(op.kokodayo) 
        } else if (opname === "adnachiel"){
            message.reply(op.adnachiel) 
        } else if (opname === "orchid"){
            message.reply(op.orchid) 
        } else if (opname === "melantha"){
            message.reply(op.activate_melantha_skill) 
        } else if (opname === "beagle"){
            message.reply(op.beagle) 
        } else if (opname === "spot"){
            message.reply(op.spot) 
        } else if (opname === "cardigan"){
            message.reply(op.cardi) 
        } else if (opname === "catapult"){
            message.reply(op.cata) 
        } else if (opname === "midnight"){
            message.reply(op.midnight) 
        } else if (opname === "popukar"){
            message.reply(op.popukar) 
        }
        //2 stars
        else if (opname === "yato"){
            message.reply(op.yato) 
        } else if (opname === "durin"){
            message.reply(op.durin) 
        } else if (opname === "12f"){
            message.reply(op.f) 
        }
        //robots
        else if (opname === "lancet-2"){
            message.reply(op.lancet)
        } else if (opname === "castle-3"){
            message.reply(op.castle_3)
        } else if (opname ==="thrm-ex"){
            message.reply(op.thrm)
        }
        //list
        else if (opname === "list"){
            message.reply(`The database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** Castle-3, Lancet-2, THRM-EX`) 
        } 
        //error message
        else message.reply(`Info fetched failed, the database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** Castle-3, Lancet-2, THRM-EX`)
     //6 stars:Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock \n 4 stars: Ambriel \n3 stars: Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel
    }   
});
