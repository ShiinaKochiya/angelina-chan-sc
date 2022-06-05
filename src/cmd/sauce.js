const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const {MessageEmbed} = require('discord.js');
const {SauceNao} = require("saucenao.js")
const sagiri = require("sagiri");
const sagiriclient = sagiri(config.saucenaoAPIkey);
const extractUrls = require("extract-urls");


module.exports = new Command({
    name: "sauce",
    description: "sauce?",
    async run(message, args, client) {
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                hour: "numeric",
                minute: "numeric",
                second: "numeric"})
        console.log("[",time,"]", message.author.tag,"used sauce")
        if (message.attachments.size > 0) {
        message.attachments.forEach(async Attachment => {
            try {
                const results = await sagiriclient(Attachment.url)
                /*const mera = new MessageEmbed()
                .setColor('AQUA')
                .setTitle('Sauce found?')
                .setURL('https://youtu.be/dQw4w9WgXcQ')
                .setDescription(`Here's a list of commands`)
                .setFields(
                    { name: 'Sauce', value: `${results[0].url}`},
                    { name: '% of similarity', value: `${results[0].similarity}`},
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Alternative (incase sauce is broken)'},
                    {  value: `${results[1].url}\nSimilarity percentage: ${results[1].similarity}`}
                )
                message.reply({embeds: [mera]})*/

                message.reply(`Sauce: ${results[0].url}\nSimilarity: ${results[0].similarity}`)
                message.channel.send(`Incase of sauce is broken, here are some alternative link: \n${results[1].url}\nSimilarity: ${results[1].similarity}\n${results[2].url}\nSimilarity: ${results[2].similarity}\n\n~~Note that these link may have low similarity, or maybe not relating at all~~`)
            } catch (e) {
                message.channel.send("Error, image is probably broken, not valid or sauce cannot be found");
            }


        })
    }
    if (!message.attachments.size > 0 && message.content.includes("https://")) {
        let urls = extractUrls(message.content);
        const string = `${urls}`;
        var strr = string.replace(`${config.prefix}sauce`, '');
        var link = strr.replace(' ', '')
        try {
            const results = await sagiriclient(link)
            message.reply(`Sauce: ${results[0].url}\nSimilarity: ${results[0].similarity}`)
                message.channel.send(`Incase of sauce is broken, here are some alternative link: \n${results[1].url}\nSimilarity: ${results[1].similarity}\n${results[2].url}\nSimilarity: ${results[2].similarity}\n\n~~Note that these link may have low similarity, or maybe not relating at all~~`)
        } catch (e) {
            message.channel.send("Error, link is probably broken, not valid or sauce cannot be found")

        }
    }

    if(!message.attachments.size > 0 && !message.content.includes("https://")){
        message.reply(`No image/link was provided\nHow can I find sauce then?`)
    }
    }   
});


function trim(input){
  return input.length > 1024 ? `${input.slice(0,1020)}...` : input
}

function attachIsImage(messageAttach) {
    var url = messageAttach.url;
    //True if this url is a png image.
    url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
    url.indexOf("jpeg", url.length - "jpeg".length /*or 3*/) !== -1;
}
