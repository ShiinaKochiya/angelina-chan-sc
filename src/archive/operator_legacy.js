<<<<<<<< HEAD:src/archive/operator.js
/*
!!! LEGACY VERSION !!!
Kept for historical purposes only!
*/

const { MessageFlags } = require("discord.js");
const Command = require("../structures/Command.js");
var op = require('../data/op.json');

module.exports = new Command({
    name: "operator",
    description: "show some operator infos",
    alias: ["op"],
    async run(message, args, client) {
        if (message.author.bot) return;
        var opname = args.slice(1).join(" ").toLowerCase();
        if (opname === "skalter") {var opname = "skadi the corrupting heart"};
        if (opname === "thermal-ex") {var opname = "thrm-ex"};
        if (opname === "chen the holung day") {var opname = "chalter"};
        if (opname === "eyja") {var opname = "eyjafjalla"};
        if (opname === "exu") {var opname = "exusiai"};
        if (opname === "sa") {var opname = "silverash"};
        console.log(message.author.tag,"used a!operator", opname);
        //6 stars
        switch(opname){
        case opname = "siege":
            message.reply(op.siege);
            break;
        case opname = "shining":
            message.reply(op.shining);
            break;
        case opname = "nightingale":
            message.reply(op.nightingale);
            break;
        case opname = "skadi the corrupting heart":
            message.reply(op.skalter); 
            break;
        case opname = "w":
            message.reply(op.w); 
            break;
        case opname = "angelina":
            message.reply(op.angelina); 
            break;
        case opname = "ceobe":
            message.reply(op.ceobe); 
            break;
        case opname = "dusk":
            message.reply(op.dusk); 
            break;
        case opname = "chen":
            message.reply(op.chen); 
            break;
        case opname = "blaze":
            message.reply(op.blaze); 
            break;
        case opname = "kaltsit":
            message.reply(op.kal); 
            break;
        case opname = "passenger":
            message.reply(op.godsenger); 
            break;
        case opname = "chalter":
            message.reply(op.chalter); 
            break; 
        case opname = "skadi":
            message.reply(op.kya); 
            break; 
        case opname = "mudrock":
            message.reply(op.mudrock); 
            break; 
        case opname = "ifrit":
            message.reply(op.ifrit); 
            break;
        case opname = "eyjafjalla":
            message.reply(op.eyja); 
            break;
        case opname = "exusiai":
            message.reply(op.exu); 
            break;
        case opname = "silverash":
            message.reply(op.đít_bạc); 
            break;
        case opname = "hoshiguma":
            message.reply(op.hoshi); 
            break;
        case opname = "saria":
            message.reply(op.daddy_saria); 
            break;
        case opname = "schwarz":
            message.reply(op.schwarz); 
            break;
        case opname = "hellagur":
            message.reply(op.hella);
            break;
        case opname = "magallan":
            message.reply(op.magie);
            message.channel.send(op.magie2);
            break;
        case opname = "mostima":
            message.reply(op.zawarudo);
            break;
        case opname = "aak":
            message.reply(op.drugs)
            break;
        //5 stars
        //4 stars
        case opname = "ambriel":
            message.reply(op.ambri); 
            break;
         
        //3 stars
        case opname = "fang":
            message.reply(op.fang); 
            break; 
        case opname = "vanilla":
            message.reply(op.vani); 
            break; 
        case opname = "hibiscus":
            message.reply(op.hibi); 
            break; 
        case opname = "ansel":
            message.reply(op.ansel_is_a_trap_wtf); 
            break; 
        case opname = "lava":
            message.reply(op.lava); 
            break; 
        case opname = "plume":
            message.reply(op.plume); 
            break; 
        case opname = "steward":
            message.reply(op.flightsteward); 
            break; 
        case opname = "kroos":
            message.reply(op.kokodayo); 
            break; 
        case opname = "adnachiel":
            message.reply(op.adnachiel); 
            break; 
        case opname = "orchid":
            message.reply(op.orchid); 
            break; 
        case opname = "melantha":
            message.reply(op.activate_melantha_skill); 
            break; 
        case opname = "beagle":
            message.reply(op.beagle); 
            break; 
        case opname = "spot":
            message.reply(op.spot); 
            break; 
        case opname = "cardigan":
            message.reply(op.cardi); 
            break; 
        case opname = "catapult":
            message.reply(op.cata); 
            break; 
        case opname = "midnight":
            message.reply(op.midnight); 
            break; 
        case opname = "popukar":
            message.reply(op.popukar); 
            break; 
        
        //2 stars
        case opname = "yato":
            message.reply(op.yato); 
            break; 
        case opname = "durin":
            message.reply(op.durin); 
            break; 
        case opname = "12f":
            message.reply(op.f); 
            break; 
        
        //robots
        case opname = "lancet-2":
            message.reply(op.lancet); 
            break;
        case opname = "castle-3":
            message.reply(op.castle_3); 
            break;
        case opname ="thrm-ex":
            message.reply(op.thrm); 
            break;
        
        //list
        case opname = "list":
            message.reply(`The database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock, Siege, Shining, Nightingale, Ifrit, Eyjafjalla, Exusiai, SilverAsh, Hoshiguma, Saria, Schwarz, Hellagur, Magallan, Mostima\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** Castle-3, Lancet-2, THRM-EX`); 
            break; 
         
        //error message
        default:
            message.reply(`Info fetched failed, the database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock, Siege, Shining, Nightingale, Ifrit, Eyjafjalla, Exusiai, SilverAsh,  Hoshiguma, Saria, Schwarz, Hellagur, Magallan, Mostima\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** Castle-3, Lancet-2, THRM-EX`);
        }
     //6 stars:Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock, Siege, Shining, Nightingale \n 4 stars: Ambriel \n3 stars: Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel
    }   
========
const { MessageFlags } = require("discord.js");
const Command = require("../../structures/Command.js");
var op = require('../../data/op.json');

module.exports = new Command({
    name: "operator",
    description: "show some operator infos",
    alias: ["op"],
    async run(message, args, client) {
        if (message.author.bot) return;
        var opname = args.slice(1).join(" ").toLowerCase();
        if (opname === "skalter") {var opname = "skadi the corrupting heart"};
        if (opname === "thermal-ex") {var opname = "thrm-ex"};
        if (opname === "chen the holung day") {var opname = "chalter"};
        if (opname === "eyja") {var opname = "eyjafjalla"};
        if (opname === "exu") {var opname = "exusiai"};
        if (opname === "sa") {var opname = "silverash"};
        console.log(message.author.tag,"used a!operator", opname);
        //6 stars
        switch(opname){
        case opname = "siege":
            message.reply(op.siege);
            break;
        case opname = "shining":
            message.reply(op.shining);
            break;
        case opname = "nightingale":
            message.reply(op.nightingale);
            break;
        case opname = "skadi the corrupting heart":
            message.reply(op.skalter); 
            break;
        case opname = "w":
            message.reply(op.w); 
            break;
        case opname = "angelina":
            message.reply(op.angelina); 
            break;
        case opname = "ceobe":
            message.reply(op.ceobe); 
            break;
        case opname = "dusk":
            message.reply(op.dusk); 
            break;
        case opname = "chen":
            message.reply(op.chen); 
            break;
        case opname = "blaze":
            message.reply(op.blaze); 
            break;
        case opname = "kaltsit":
            message.reply(op.kal); 
            break;
        case opname = "passenger":
            message.reply(op.godsenger); 
            break;
        case opname = "chalter":
            message.reply(op.chalter); 
            break; 
        case opname = "skadi":
            message.reply(op.kya); 
            break; 
        case opname = "mudrock":
            message.reply(op.mudrock); 
            break; 
        case opname = "ifrit":
            message.reply(op.ifrit); 
            break;
        case opname = "eyjafjalla":
            message.reply(op.eyja); 
            break;
        case opname = "exusiai":
            message.reply(op.exu); 
            break;
        case opname = "silverash":
            message.reply(op.đít_bạc); 
            break;
        case opname = "hoshiguma":
            message.reply(op.hoshi); 
            break;
        case opname = "saria":
            message.reply(op.daddy_saria); 
            break;
        case opname = "schwarz":
            message.reply(op.schwarz); 
            break;
        case opname = "hellagur":
            message.reply(op.hella);
            break;
        case opname = "magallan":
            message.reply(op.magie);
            message.channel.send(op.magie2);
            break;
        case opname = "mostima":
            message.reply(op.zawarudo);
            break;
        case opname = "aak":
            message.reply(op.drugs)
            break;
        //5 stars
        //4 stars
        case opname = "ambriel":
            message.reply(op.ambri); 
            break;
         
        //3 stars
        case opname = "fang":
            message.reply(op.fang); 
            break; 
        case opname = "vanilla":
            message.reply(op.vani); 
            break; 
        case opname = "hibiscus":
            message.reply(op.hibi); 
            break; 
        case opname = "ansel":
            message.reply(op.ansel_is_a_trap_wtf); 
            break; 
        case opname = "lava":
            message.reply(op.lava); 
            break; 
        case opname = "plume":
            message.reply(op.plume); 
            break; 
        case opname = "steward":
            message.reply(op.flightsteward); 
            break; 
        case opname = "kroos":
            message.reply(op.kokodayo); 
            break; 
        case opname = "adnachiel":
            message.reply(op.adnachiel); 
            break; 
        case opname = "orchid":
            message.reply(op.orchid); 
            break; 
        case opname = "melantha":
            message.reply(op.activate_melantha_skill); 
            break; 
        case opname = "beagle":
            message.reply(op.beagle); 
            break; 
        case opname = "spot":
            message.reply(op.spot); 
            break; 
        case opname = "cardigan":
            message.reply(op.cardi); 
            break; 
        case opname = "catapult":
            message.reply(op.cata); 
            break; 
        case opname = "midnight":
            message.reply(op.midnight); 
            break; 
        case opname = "popukar":
            message.reply(op.popukar); 
            break; 
        
        //2 stars
        case opname = "yato":
            message.reply(op.yato); 
            break; 
        case opname = "durin":
            message.reply(op.durin); 
            break; 
        case opname = "12f":
            message.reply(op.f); 
            break; 
        
        //robots
        case opname = "lancet-2":
            message.reply(op.lancet); 
            break;
        case opname = "castle-3":
            message.reply(op.castle_3); 
            break;
        case opname ="thrm-ex":
            message.reply(op.thrm); 
            break;
        
        //list
        case opname = "list":
            message.reply(`The database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock, Siege, Shining, Nightingale, Ifrit, Eyjafjalla, Exusiai, SilverAsh, Hoshiguma, Saria, Schwarz, Hellagur, Magallan, Mostima\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** Castle-3, Lancet-2, THRM-EX`); 
            break; 
         
        //error message
        default:
            message.reply(`Info fetched failed, the database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock, Siege, Shining, Nightingale, Ifrit, Eyjafjalla, Exusiai, SilverAsh,  Hoshiguma, Saria, Schwarz, Hellagur, Magallan, Mostima\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** Castle-3, Lancet-2, THRM-EX`);
        }
     //6 stars:Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock, Siege, Shining, Nightingale \n 4 stars: Ambriel \n3 stars: Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel
    }   
>>>>>>>> 8a659c1 (The bot is alive?):src/cmd/weird ass cmds/operator.js
});