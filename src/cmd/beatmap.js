const Command = require("../structures/Command.js");
const { v2, auth, tools, mods } = require("osu-api-extended")
const config = require("../data/config.json");


module.exports = new Command({
    name: "map",
    description: "beatmap searching on osu.ppy.sh/beatmaps",
    
    async run(message, args, client) {
        if (message.author.bot) return;
        const main = async () => {
            // Authencating via client, go to https://osu.ppy.sh/home/account/edit#oauth for registering client (That is if you have an osu! account)
            await auth.login(config.osu_id, config.osu_secret)
            var beatmapid = args.slice(1).join(" ")
            const rawdata = await v2.beatmap.get(beatmapid);


            message.reply(`The beatmap name is ${rawdata.beatmapset.title} and the difficulty name is ${rawdata.version}, made by ${rawdata.beatmapset.creator}, having the status of ${rawdata.status}, a BPM of ${rawdata.bpm}, a maximum combo of ${rawdata.max_combo}`)
            
        }
        main();
    }
});

