  /** @format */


  const { Permissions } = require('discord.js');
  const Client = require("./structures/Client.js");
  const Command = require("./structures/Command.js");
  const config = require("./data/config.json");
  const client = new Client();
  const cron = require('cron');
  const fs = require("fs");

  fs.readdirSync("./src/cmd")
      .filter(file => file.endsWith(".js"))
      .forEach(file => {
          /**
           * @type {Command}
           */
          const command = require(`./cmd/${file}`);
          console.log(`Command ${command.name} parse complete`);
          client.commands.set(command.name, command);
      });
  return 0;
