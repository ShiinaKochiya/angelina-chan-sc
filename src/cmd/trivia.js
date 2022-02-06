const Command = require("../structures/Command.js");
const quiz = require("../data/quiz.json");
const { MessageFlags } = require("discord.js");
module.exports = new Command({
    name: "trivia",
    description: "trivia",

    async run(message, args, client) {
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
	       return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

    message.reply(item.question, { fetchReply: true })
	.then(() => {
		message.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] })
			.then(collected => {
				message.channel.send(`${collected.first().author} got the correct answer!`);
			})
			.catch(collected => {
				message.channel.send(`Looks like nobody got the answer this time.`);
			});
	});

    }
});
