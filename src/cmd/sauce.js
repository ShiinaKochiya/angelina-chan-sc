const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const {MessageEmbed} = require('discord.js');
const {SauceNao} = require("saucenao.js")
const sagiri = require("sagiri");
const sagiriclient = sagiri(config.saucenaoAPIkey);
const isImageUrl = require("is-image-url");
const extractUrls = require("extract-urls");


module.exports = new Command({
    name: "sauce",
    description: "sauce?",
    async run(message, args, client) {
      if (message.attachments.size > 0) {
        message.attachments.forEach(async Attachment => {
            try {
                const results = await sagiriclient(Attachment.url)
                message.reply(results[0].url)
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
            message.reply(results[0].url)
        } catch (e) {
            message.channel.send("Error, link is probably broken, not valid or sauce cannot be found")

        }
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
