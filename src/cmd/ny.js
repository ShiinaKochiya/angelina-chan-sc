const Command = require("../structures/Command.js");


const cron = require('cron');

module.exports = new Command({
    name: "ny",
    description: "show bot help",

    async run(message, args, client) {
        let scheduledMessage = new cron.CronJob('00 00 00 * * *', () => {
            message.channel.send('@everyone Happy new year! 🥳')
          });
          scheduledMessage.start()
          console.log('it worked')

    }   
});

