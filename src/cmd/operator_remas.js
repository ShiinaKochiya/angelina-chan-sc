//operator.js, rewritten 
//did you know: the filename, temporary cmd name and its datafile (op_remas.json) is a reference to a maimai difficulty
//note to future self: get rid of the lookup table, if you can

// > bro decided to write the command I abandoned a long time ago :skull: -Shiina
// > blame "ngẫu hứng" for that -giabao06

const { MessageFlags } = require ("discord.js");
const command = require("../structures/Command.js");
var oplist = require ('../data/op_remas.json')

/*
Add operators in these const arrays if there is an op_remas.json update.
Also, remember to add operators to the list in op_remas.json, as it will be sent if the op is not found.
*/
const list6 = ["siege", "angelina", "skalter", "w", "ceobe", "dusk", "chen", "blaze", "kaltsit", "chalter", "passenger", "skadi", "mudrock", "shining", "nightingale"];
const list5 = [];
const list4 = ["ambriel"];
const list3 = ["fang", "vanilla", "hibiscus", "ansel", "lava", "plume", "steward", "kroos", "adnachiel", "orchid", "melantha", "beagle", "spot", "cardi", "catapult", "midnight", "popukar"];
const list2 = ["yato", "durin", "12f"];
const list1 = ["lancet", "castle-3", "thermal-ex"]


module.exports = new command({
        name: "operator",
        description: "operator.js remas version",
        alias: ["op"],
        async run(message, args, client){
            if (message.author.bot) return;
            var opname = args.slice(1).join(" ").toLowerCase();
            //commonly used names must be defined to our names
            //alter names
            if (opname === "chen the holung day") {opname = "chalter"};
            if (opname === "skadi the corrupting heart") opname = "skalter";
            //shortened names
            if (opname === "eyja") {opname = "eyjafjalla"};  //no entry for this either
            if (opname === "exu") {opname = "exusiai"}; //no entry for this too...
            if (opname === "sa") {opname = "silverash"};
            //names that contain weird characters
            if (opname === "kal'tsit") opname = "kaltsit";
            var found=false, chk=true;
            if (opname === "list") {found = true; chk == false; message.reply(`Currently available operators:\n \n**6 stars:** ${oplist.lists.list6}\n**5 stars:** ${oplist.lists.list5}\n**4 stars:** ${oplist.lists.list4}\n**3 stars:** ${oplist.lists.list3}\n**2 stars:** ${oplist.lists.list2}\n**1 star / Robots:** ${oplist.lists.list1}\n`)}
            while (chk == true) { // let's not waste CPU cycles
                if (found==true) {chk = false; break;}
            for (let i=0; i<=list6.length; i++) {
                if (opname === list6[i]) {message.reply(oplist.chr_6st[opname]); found=true; chk=false; break}}
            for (let i=0; i<=list5.length; i++) {
                if (opname === list5[i]) {message.reply(oplist.chr_5st[opname]); found=true; chk=false; break}}
            for (let i=0; i<=list4.length; i++) {
                if (opname === list4[i]) {message.reply(oplist.chr_4st[opname]); found=true; chk=false; break}}
            for (let i=0; i<=list3.length; i++) {
                if (opname === list3[i]) {message.reply(oplist.chr_3st[opname]); found=true; chk=false; break}}
            for (let i=0; i<=list2.length; i++) {
                if (opname === list2[i]) {message.reply(oplist.chr_2st[opname]); found=true; chk=false; break}}
            for (let i=0; i<=list1.length; i++) {
                if (opname === list1[i]) {message.reply(oplist.chr_robots[opname]); found=true; chk=false; break}}
            chk=false; break;
            }
            if (found === false) message.reply(`Operator currently not in database. Currently available operators:\n \n**6 stars:** ${oplist.lists.list6}\n**5 stars:** ${oplist.lists.list5}\n**4 stars:** ${oplist.lists.list4}\n**3 stars:** ${oplist.lists.list3}\n**2 stars:** ${oplist.lists.list2}\n**1 star / Robots:** ${oplist.lists.list1}\n`)
            var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                hour: "numeric",
                minute: "numeric",
                                                          second: "numeric"})

            console.log(`[${time} INFO] ${message.author.username} used a!operator ${opname}`);
        }
})