# Angelina-chan

An Arknights operator stats and fun Discord bot by Sakura Kaslana for "The W kult". Not ready for deployment on other servers yet.


Requires Node v17 to run.

Installation (for testing):
1. Clone this repo
2. Run `npm install`
3. Configure stuff in `./src/data/config.json`.
4. Run `npm start`
5. Invite the bot to your server: `https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID_HERE&permissions=8&scope=bot`

Configuration (`./src/data/config.json`)
- 'token': bot token
- 'prefix': bot prefix
- 'adminRoles': Admin role (implementation of an array of one planned)

Another one (`./src/data/quiz.json`)
- U gotta make ur own quiz, cos I don't wanna spoil the answers

For more info on creating a bot and obtaining a bot token, go here: https://github.com/discord-apps/bot-tutorial

Thanks to giabao06 for the 24/7 hosting; Hyngwarus, Freelance and others for testing the bot; And some guys on StackOverflow for helping me make it work
