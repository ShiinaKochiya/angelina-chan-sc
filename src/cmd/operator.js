const { MessageFlags } = require("discord.js");
const Command = require("../structures/Command.js");
var op = require('../data/op.json')

module.exports = new Command({
    name: "operator",
    description: "show some operator infos",

    async run(message, args, client) {
        if (message.author.bot) return;
<<<<<<< HEAD
        var opname = args.slice(1).join(" ").toLowerCase()
        if (opname === "skalter"){var opname = "skadi the corrupting heart"}
        if (opname === "chen the holung day"){var opname = "chalter"}
        console.log(message.author.tag,"used a!operator", opname)
=======
        var opname = args.slice(1).join(" ")

>>>>>>> b666c02cfa4b37e04e37f4e1c4193ee6e169a09d
        //6 stars
        if (opname === "skadi the corrupting heart"){
            message.channel.send(op.skalter)
        } else if (opname === "w"){
            message.channel.send(op.w)
        } else if (opname === "angelina"){
            message.channel.send(op.angelina)
        } else if (opname === "ceobe"){
            message.channel.send(op.ceobe)
        } else if (opname === "dusk"){
            message.channel.send(op.dusk)
        }else if (opname === "chen"){
            message.channel.send(op.chen)
        } else if (opname === "blaze"){
            message.channel.send(op.blaze)
        } else if (opname === "kaltsit"){
            message.channel.send(op.kal)
        } else if (opname === "passenger"){
            message.channel.send(op.godsenger)
        } else if (opname === "chalter"){
            message.channel.send(op.chalter) 
        } else if (opname === "skadi"){
            message.channel.send(op.kya) 
        } else if (opname === "mudrock"){
            message.channel.send(op.mudrock) 
        }
        //5 stars
        //4 stars
        else if (opname === "ambriel"){
            message.channel.send(op.ambri)
        } 
        //3 stars
        else if (opname === "fang"){
            message.channel.send(op.fang) 
        } else if (opname === "vanilla"){
            message.channel.send(op.vani) 
        } else if (opname === "hibiscus"){
            message.channel.send(op.hibi) 
        } else if (opname === "ansel"){
            message.channel.send(op.ansel_is_a_trap_wtf) 
        } else if (opname === "lava"){
            message.channel.send(op.lava) 
        } else if (opname === "plume"){
            message.channel.send(op.plume) 
        } else if (opname === "steward"){
            message.channel.send(op.flightsteward) 
        } else if (opname === "kroos"){
            message.channel.send(op.kokodayo) 
        } else if (opname === "adnachiel"){
            message.channel.send(op.adnachiel) 
        } else if (opname === "orchid"){
            message.channel.send(op.orchid) 
        } else if (opname === "melantha"){
            message.channel.send(op.activate_melantha_skill) 
        } else if (opname === "beagle"){
            message.channel.send(`Beagle is the baseline unit for Defenders in Arknights, even as a 3★ Defender. Everything about her kit is focused entirely on mitigating physical damage. She gains bonus DEF from her Potential bonuses, her Trust bonuses, and her Talent—appropriately called DEF Up—and her Skill, DEF Up α, offers another DEF buff on top of everything else. Because she can Block up to 3 enemies and shrug off their attacks fairly easily, she’s often one of the best Defenders for Doctors to raise early in their Arknights careers.\nBeing a 3* unit, Beagle can promote to E1, but not to E2, which limits her ability to keep up with higher-rarity Operators. She also has no way to mitigate enemy Arts damage, which becomes increasingly common in higher-end content. Despite this, Beagle remains useful for a surprisingly long time. Doctors often need multiple Defenders to cover different parts of a map, and Beagle’s low rarity means she is cheap to raise and has a comparatively low DP cost.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 2035\nAtk: 295\nDef: 490\nRes: 0\nDP: 18\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: DEF Up α (Skill 1)`) 
        } else if (opname === "spot"){
            message.channel.send(`This 3* Operator is a healing Defender with a particular emphasis on helping his allies survive physical damage. In order to heal his allies, Spot makes use of his Skill, Secondary Healing Mode, which causes him to heal instead of attacking for the Skill’s duration. This Skill activates his Talent, Smoke Installation, which grants allies Physical Evasion after Spot heals them. Between these two abilities, Spot supplements the frontline well: he can bottleneck enemies with his Block-2 (Block-3 after promoting), he has innate RES to stand up to enemy Casters, and when the chips are down he can function as an extra healer.\nSpot’s low rarity makes him easier to max out in Potential than higher-rarity Defenders, but unfortunately it also hampers his maximum power. As a 3* Operator, Spot can never promote to E2, limiting his stats and abilities. The unreliability of Physical Evasion is also an issue. Early players in particular may find good use for Spot, since his combination of tankiness, extra healing, lucky buffs, and accessibility can be a lifesaver when resources are limited. However, he’ll have difficulty keeping up with other units when taking on more challenging content.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1833\nAtk: 320\nDef: 442\nRes: 10\nDP: 17\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: Secondary Healing Mode(Skill 1)`) 
        } else if (opname === "cardigan"){
            message.channel.send(`Clumsy but cheerful, Cardigan supports as a 3* Defender with an emphasis on HP. Perhaps as a representation of her boundless energy, Cardigan’s Talent, Max HP Up, passively increases her maximum HP after E1 promotion. This works well with her Skill, Regeneration α, which restores a percentage of Cardigan’s max HP when activated. Judicious use of this Skill can make Cardigan a decent option for tanking enemy Casters despite her lack of RES, as she can shrug off their Arts with a self-heal and keep face-tanking for a while longer.\nCardigan runs into problems when facing strong enemies that hit harder than her HP pool can handle. Her self-heal is great for sustain, but it doesn’t increase her ability to mitigate damage. Lacking an E2 promotion also limits Cardigan’s ability to contribute in the long term, and at present she is not available from Recruitment, which makes her a little less accessible than her 3* ranking would suggest\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 2130\nAtk: 305\nDef: 475\nRes: 0\nDP: 18\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: Regeneration α(Skill 1)`) 
        } else if (opname === "catapult"){
            message.channel.send(`Catapult is a 3★ Operator with the typical AoE Sniper attributes of extended attack range, high Attack, slow Attack Speed, and high Deployment cost. Lightweight, Catapult’s Talent, reduces her DP cost by 1. Since AoE Snipers are generally expensive to deploy, this may make her worth considering even over higher-rarity options for maps with tight DP restrictions. Catapult’s one and only Skill, Blast Range Up 𝛂, increases the Area of Effect of her attacks\nCatapult’s major shortcomings stem from her low rarity.  Lower base stats and the lack of an E2 upgrade mean she won’t have a place on your late-game roster.  For early game, however, you may find that her cheap investment costs and knack for blowing stuff up is exactly what you need to help you progress.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1150\nAtk: 617\nDef: 85\nRes: 0\nDP: 23\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,8s\n\nRecommended skill: Blast Range Up α(Skill 1)`) 
        } else if (opname === "midnight"){
            message.channel.send(`An accessible 3★ DPS Guard who can deal Arts damage on demand, Midnight is a low-investment damage dealer whose unique talents may still be helpful on later maps with tight DP constraints. Midnight only has one Skill, but he knows that what really matters is how you use it. Enchant Weapon α gives Midnight a damage boost and turns his attacks into Arts damage. It’s a simple effect, but very useful against high-DEF enemies.\nUnfortunately, when you try to please two clients equally, you run the risk of pleasing neither. While Midnight can deal both physical and Arts damage, he sacrifices power in both areas for his flexibility. In some situations, it is better to have dedicated DPS units for both roles rather than trying to combine the two, especially since Midnight’s Skill is expensive and doesn’t last very long.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1653\nAtk: 497\nDef: 282\nRes: 10\nDP: 16\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,3s\n\nRecommended skill: Enchant Weapon α(Skill 1)`) 
        } else if (opname === "popukar"){
            message.channel.send(`Popukar, 3* AoE Guard who can deal Physical damage to two enemies at once. Like most 3* Operators, Popukar's skillset is straightforward.  Her talent provides a percent HP and Attack buff, while her skill ATK Up α provides a manual attack buff on a medium cooldown and no starting SP.\nAs a 3* AoE Guard, Popukar cannot reach Elite 2, missing out on blocking/attacking three enemies like her higher rarity peers.  Although this may seem like it defeats the purpose of using an AoE Guard, Popukar has a comparable statline to her Archetype peers at Elite 1, making her as effective as a pure attacker at a much lower investment cost.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1858\nAtk: 495\nDef: 245\nRes: 0\nDP: 19\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: ATK Up α(Skill 1)`) 
        }
        //2 stars
<<<<<<< HEAD
        else if (opname === "yato"){
            message.channel.send(`Yato is a low rarity Starter that can block 2 enemies. Yato has a very low DP cost in addition to the shortened redeployment time granted by her Fast Redeployment talent. Unlocking her potential will reduce these even further, making her an extremely cost efficient drop. But even off the battlefield, she can be a valuable asset in the Trading Post, as her RIIC skill is better than some higher rarity units.\nYato’s main downside is her rarity, which means her low level cap will make her quickly fall behind other operators and that she cannot use special skills. Noticeably, Yato cannot recover DP like typical Vanguards. Thus, she functions more as a redeployable, low-cost Guard.\n\nStats(lvl 30, not include trust bonus and potential):\nHP: 1030\nAtk: 232\nDef: 192\nRes: 0\nDP: 7\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,05s\n\nRecommended skill: None`) 
        } else if (opname === "durin"){
            message.channel.send(`As a 2* Operator, Durin has no Skills and cannot promote. She does gain the Lucky Lass Talent at level 30, which gives her an enormous amount of Arts Dodge. Combined with her innate RES, Durin can be a surprisingly good early-game option for tanking enemy Casters.Without promotion gains or Skills, Durin has a tough time competing with free 5* donki for a roster spot, let alone other Casters the player may pull. Her biggest selling point is probably her low DP cost, making her a cheap source of Arts damage for maps with limited DP. \n\nStats(lvl 30, not include trust bonus and potential):\nHP: 952\nAtk: 340\nDef: 62\nRes: 10\nDP: 12\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,6s\n\nRecommended skill: None`) 
        } else if (opname === "12f"){
            message.channel.send(`As a 2★ Starter Operator, 12F has no Skills and cannot be promoted. He does gain a Talent upon reaching level 30, though: Dodge Rate Up, which grants an enormous amount of passive Physical Dodge. Combined with his surprisingly high HP (even without promotion, his HP is higher than some 3★ Casters at max level), 12F can be unexpectedly survivable, especially if you stack additional sources of Physical Dodge on him from other Operators.\nAs an AoE Caster, 12F’s role is to do damage, usually to counter huge waves of weak enemies, and despite his purely defensive Talent and lack of promotion, his DPS is often sufficient to get the job done in the early game. As a 2★ unit, he also benefits from low DP cost (high DP cost is a drawback for most AoE Casters) and cheap upgrade costs, causing some Doctors to choose him over his higher-rarity, higher-DPS counterpart Lava.\n\nStats(lvl 30, not include trust bonus and potential):\nHP: 1378\nAtk: 400\nDef: 50\nRes: 10\nDP: 24\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,9s\n\nRecommended skill: None`) 
        }
        //list
        else if (opname === "list"){
            message.channel.send(`The database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** none`) 
        } 
=======
        else if (opname === "Yato"){
            message.channel.send(`Yato is a low rarity Starter that can block 2 enemies. Yato has a very low DP cost in addition to the shortened redeployment time granted by her Fast Redeployment talent. Unlocking her potential will reduce these even further, making her an extremely cost efficient drop. But even off the battlefield, she can be a valuable asset in the Trading Post, as her RIIC skill is better than some higher rarity units.\nYato’s main downside is her rarity, which means her low level cap will make her quickly fall behind other operators and that she cannot use special skills. Noticeably, Yato cannot recover DP like typical Vanguards. Thus, she functions more as a redeployable, low-cost Guard.\n\nStats(lvl 30, not include trust bonus and potential):\nHP: 1030\nAtk: 232\nDef: 192\nRes: 0\nDP: 7\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,05s\n\nRecommended skill: None`)
        } else if (opname === "Durin"){
            message.channel.send(`As a 2* Operator, Durin has no Skills and cannot promote. She does gain the Lucky Lass Talent at level 30, which gives her an enormous amount of Arts Dodge. Combined with her innate RES, Durin can be a surprisingly good early-game option for tanking enemy Casters.Without promotion gains or Skills, Durin has a tough time competing with free 5* donki for a roster spot, let alone other Casters the player may pull. Her biggest selling point is probably her low DP cost, making her a cheap source of Arts damage for maps with limited DP. \n\nStats(lvl 30, not include trust bonus and potential):\nHP: 952\nAtk: 340\nDef: 62\nRes: 10\nDP: 12\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,6s\n\nRecommended skill: None`)
        } else if (opname === "12F"){
            message.channel.send(`As a 2★ Starter Operator, 12F has no Skills and cannot be promoted. He does gain a Talent upon reaching level 30, though: Dodge Rate Up, which grants an enormous amount of passive Physical Dodge. Combined with his surprisingly high HP (even without promotion, his HP is higher than some 3★ Casters at max level), 12F can be unexpectedly survivable, especially if you stack additional sources of Physical Dodge on him from other Operators.\nAs an AoE Caster, 12F’s role is to do damage, usually to counter huge waves of weak enemies, and despite his purely defensive Talent and lack of promotion, his DPS is often sufficient to get the job done in the early game. As a 2★ unit, he also benefits from low DP cost (high DP cost is a drawback for most AoE Casters) and cheap upgrade costs, causing some Doctors to choose him over his higher-rarity, higher-DPS counterpart Lava.\n\nStats(lvl 30, not include trust bonus and potential):\nHP: 1378\nAtk: 400\nDef: 50\nRes: 10\nDP: 24\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,9s\n\nRecommended skill: None`)
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]",message.author.tag,"used operator for", opname)
      }
        //list
        else if (opname === "list"){
        message.channel.send(`The database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** none\nRemember to make the first letter of the name CAP`)
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]",message.author.tag,"listed operator database")
       }

>>>>>>> b666c02cfa4b37e04e37f4e1c4193ee6e169a09d
        //error message
        else message.reply(`Info fetched failed, the database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** none`)
     //6 stars:Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock \n 4 stars: Ambriel \n3 stars: Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel
    }   
});
