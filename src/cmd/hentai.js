const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "hentai",
    description: "send a random hetai from Sakura Vault",

    async run(message, args, client) {
        console.log(message.author.tag,"used a!hentai")
        if (message.channel.nsfw){
            //message.channel.send(`https://sakura.w3spaces.com/${Math.floor(Math.random() * 10) + 1}.jpg`)
            var digi = Math.floor(Math.random() * 20) + 1;
            if (digi === 1){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/904906381482672128/0UwM5o8wVr5XWiinVfOsXdohsGVQ3FbPPCchVITvaYE.jpg`)
            } else if (digi === 2){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/888108869417586708/1631806466543.jpg`)
            } else if (digi === 3){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/836894130512199710/sample_0e5ba35f9cb31f5d1e58d22d7304e1d1.jpg`)
            } else if (digi === 4){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/816245787255373824/sample_e15e2d90f7cf929c8619a9aa1de92b9f.jpg`)
            } else if (digi === 5){
                message.channel.send(`https://media.discordapp.net/attachments/527959344520888321/651448618418700307/cat-0212_01BAT0QCF587C0TSBTN3KMZ1ZX.640x0.jpg`)
            } else if (digi === 6){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/810502272463142932/bziqs9udhah61.png`)
            } else if (digi === 7){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/833633961783197737/e1752dd9d7da51b8e4a703f11c53a153.jpg`)
            } else if (digi === 8){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904908663406358538/dc2a428.jpg`)
            } else if (digi === 9){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904909085420453918/uk37.jpg`)
            } else if (digi === 10){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/857628793359302676/img18.jpg`)
            } else if (digi === 11){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904910089230639124/uk19.jpg`)
            } else if (digi === 12){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904912816740376606/gi8.jpg`)
            } else if (digi === 13){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904914810863489024/gi7.jpg`)
            } else if (digi === 14){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904930226885234718/vt7.png`)
            } else if (digi === 15){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904931548367843358/uk35.png`)
            } else if (digi === 16){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904931930875756654/vt10.png`)
            } else if (digi === 17){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904932978793275402/uk9.jpg`)
            } else if (digi === 18){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/904934588873338970/ak6.jpg`)
            } else if (digi === 19){
                message.channel.send(`https://media.discordapp.net/attachments/775391981601161222/904157508833255474/1635568088902.jpg`)
            } else if (digi === 20){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/905306830115319839/93756662_p0.png`)
            } else if (digi === 21){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/905306830576697404/RDT_20210702_1456127635551066547932409.jpg`)
            } else if (digi === 22){
                message.channel.send(`https://cdn.discordapp.com/attachments/775391981601161222/905306830945783868/image0.jpg`)
            } else if (digi === 23){
                message.channel.send(`https://cdn.discordapp.com/attachments/904908620356014131/907450132482621492/ak32.jpg`)
            }
            else message.channel.send(`image hasn't been fetched correctly, the queue number is ${digi}`)
 
            
       }
       else {
           message.channel.send(`You can only use this command in a NSFW channel!`)
       }

    }
});
