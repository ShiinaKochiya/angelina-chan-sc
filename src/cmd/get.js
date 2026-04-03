const Command = require("../structures/Command.js");
const axios = require("axios");

module.exports = new Command({
    name: "get",
    description: "Fetch data from an API URL",

    async run(message, args, client) {
        if (message.author.bot) return;
        console.log(message.author.tag, "used a!get");

        if (!args[1]) {
            return message.channel.send("Please provide a valid API URL.");
        }

        const url = args[1];

        try {
            new URL(url);
        } catch (error) {
            return message.channel.send("Invalid URL provided. Please provide a valid URL starting with http:// or https://");
        }

        try {
            const response = await axios.get(url);
            const data = response.data;

            const content = typeof data === 'object' ? JSON.stringify(data, null, 2) : data;

            //tf u mean discord have a char limit
            const messageContent = content.length > 1900 ? content.substring(0, 1900) + "..." : content;

            message.channel.send(`\`\`\`\n${messageContent}\n\`\`\``);
        } catch (error) {
            message.channel.send(`Error fetching data from ${url}: ${error.message}`);
        }
    }
});
