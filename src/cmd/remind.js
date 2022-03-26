const Command = require("../structures/Command.js");

var cron = require('node-cron');

const tzOffset = require("tz-offset")

module.exports = new Command({
    name: "remind",
    description: "remind",

    async run(message, args, client) {
        if (message.author.bot) return;
        
        //getting infos
        var minutes = args.slice(1).join(" ");
        var hours = args.slice(2).join(" ");
        var day = args.slice(3).join(" ")
        var month = args.slice(4).join(" ")
        var timezone = args.slice(5).join(" ")
        var rem = args.slice(6).join(" ")
        //rearranging infos
        var ml = minutes.length - hours.length + 1;
        var hl = hours.length - day.length + 1;
        var dl = day.length - month.length + 1;
        var mol = month.length - timezone.length + 1;
        var tz = timezone.length - rem.length + 1;

        var minutes = minutes.substr(0, ml);
        var hours = hours.substr(0, hl);
        var day = day.substr(0, dl);
        var month = month.substr(0, 3);
        //var timezone = timezone.substr(0, 1);
        var timezone = 1;
        //validating infos
        var validate = 0
        
            //checking if all var is a number
        if (isNaN(minutes)){
            message.reply(`you have entered an invalid minute parameter | Error 1`)
        } else if (isNaN(hours)){
            message.reply(`you have entered an invalid hour parameter | Error 1`)
        } else if (isNaN(day)){
            message.reply(`you have entered an invalid day parameter | Error 1`)
        } else if (isNaN(month)){
            message.reply(`you have entered an invalid month parameter | Error 1`)
        } else var validate = 1;
            //checking if all var is in correct form
        if (minutes>60){
            message.reply(`you have entered an invalid minute parameter | Error 2`)
        } else if (hours>24){
            message.reply(`you have entered an invalid hour parameter | Error 2`)
        } else if (month>12){
            message.reply(`you have entered an invalid month parameter | Error 2`)
        } else if (timezone>3){
            message.reply(`you have entered an invalid timezone parameter\nAll current timezones:\n1:Asia/Ho_Chi_Minh\n2:Europe/Paris\n3:America/New_York\nError 2`)
        } else var validate = 1;
        switch (month){
            case month = 1:
                if (day>31){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 2:
                if (day>28){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;    
            case month = 3:
                if (day>31){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 4:
                if (day>30){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 5:
                if (day>31){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 6:
                if (day>30){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 7:
                if (day>31){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 8:
                if (day>31){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 9:
                if (day>30){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 10:
                if (day>31){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 11:
                if (day>30){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
            case month = 12:
                if (day>31){
                    message.reply(`you have entered an invalid date parameter`)
                    var validate = 0
                }
                break;
        }
        if (validate = 1){
        //checking timezone 
        switch (timezone){
            case timezone = 1:
                var time = `Asia/Ho_Chi_Minh`
                break;
            case timezone = 2:
                var time = `Europe/Paris`
                break;
            case timezone = 3:
                var time = `America/New_York`
                break;
        }
        //start cron job
        var reminder = cron.schedule(`${minutes} ${hours} ${day} ${month}`, () => {
            console.log('Testing');
          }, {
            scheduled: true,
            timezone: `${time}`
          });
        reminder.start();
        //testing
        message.reply(`second: ${seconds}\nminutes: ${minutes}\nhours: ${hours}\nday: ${day}\nmonth: ${month    }\ntimezone: ${time}\nremind with: ${rem}`)
        }
        
    }
});

