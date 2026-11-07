const Command = require("../structures/Command.js");
const fs = require("fs");
const path = require("path");
const config = require("../data/config.json");

const gamesPath = path.join(__dirname, "../data/games.json");

function readGames() {
    const games = JSON.parse(fs.readFileSync(gamesPath, "utf8"));
    if (!Array.isArray(games) || games.some(game => typeof game !== "string" || !game.trim())) {
        throw new Error("games.json must contain a non-empty string array");
    }
    return games;
}

function writeGames(games) {
    fs.writeFileSync(gamesPath, `${JSON.stringify(games, null, 4)}\n`, "utf8");
}

module.exports = new Command({
    name: "games",
    description: "add or remove games from the game picker",
    alias: ["game"],

    async run(message, args) {
        if (!message.member || !message.member.roles.cache.some(role => config.adminRoles.includes(role.id))) {
            return message.reply("You do not have permission to use this command.");
        }

        if (args.length < 3) {
            return message.channel.send("Usage: a!games <add|remove> <game name>");
        }

        const action = args[1].toLowerCase();
        const gameName = args.slice(2).join(" ").trim();
        if (!gameName) {
            return message.channel.send("Please provide a game name.");
        }

        let games;
        try {
            games = readGames();
        } catch (err) {
            console.error("Failed to read games.json:", err);
            return message.channel.send("Failed to read games.json.");
        }

        const existingIndex = games.findIndex(game => game.toLowerCase() === gameName.toLowerCase());

        if (action === "add") {
            if (existingIndex !== -1) {
                return message.channel.send(`That game is already in the list: ${games[existingIndex]}`);
            }
            games.push(gameName);
        } else if (action === "remove") {
            if (existingIndex === -1) {
                return message.channel.send("That game is not in the list.");
            }
            games.splice(existingIndex, 1);
        } else {
            return message.channel.send("Usage: a!games <add|remove> <game name>");
        }

        try {
            writeGames(games);
        } catch (err) {
            console.error("Failed to write games.json:", err);
            return message.channel.send("Failed to write games.json.");
        }

        const actionMessage = action === "add" ? "added to" : "removed from";
        return message.channel.send(`Game ${actionMessage} the list: ${gameName}`);
    }
});
