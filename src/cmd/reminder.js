
const cron = require('node-cron');
const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "reminder",
    description: "setting pity for the headhunt cmd",
    alias: ["remind"],

    async run(message, args, client) {
    
        var time = args.slice(1).join(" ");
        var day = args.slice(2).join(" ");
        var mes = args.slice(3).join(" ");
        var l1 = time.length;
        var l2 = day.length;
        var l3 = mes.length;

        time = time.substr(0, l1-l2-1);
        day = day.substr(0, l2-l3-1);

        var hour = time.substr(0,time.length - 3);
        var minute = time.substr(time.length - 2, time.length);

    
    let scheduledMessage = cron.schedule(`0 ${minute} ${hour} * * ${day}`, () => {
    client.channels.cache.get('1311344548995399690').send(mes)
    }, {
        scheduled: true,
        timezone: "Asia/Ho_Chi_Minh"
    });

    scheduledMessage.start()

    }
});
