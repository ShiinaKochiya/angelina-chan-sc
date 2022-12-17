# Angelina-chan

An Arknights operator stats and fun Discord bot by Sakura Kaslana and Giabao06 for some servers. Not intended for global deployment.


Requires Node v18 to run.

## Installation (for testing):
1. Clone this repo
2. Run `npm install`
3. Configure stuff in `./src/data/config.json`.
4. Run `npm start`
5. Invite the bot to your server: `https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID_HERE&permissions=8&scope=bot`


## Configuration

### `./src/data/config.json`
- 'token': bot token
- 'prefix': bot prefix
- 'adminRoles': admin roles, each should be in quotes. See instruction in file 

### `./src/data/quiz.json`:
- make your own quiz lol

For more info on creating a bot and obtaining a bot token, go here: https://github.com/discord-apps/bot-tutorial

Thanks to giabao06 for the 24/7 hosting; Hyngwarus, Freelance and others for testing the bot; Akuba for helping me realize how dumb I am; And some guys on StackOverflow for helping me make it work

## Notes
- ~~As of 2022-04-13, Sakura Kaslana is temporary on hiatus so there will be no feature updates, only bugfixes.~~ he resurrected /s -giabao06

- 2022-05-06, Sakura Kaslana is back on the project, but with limited activities. Seyun Sky is now a part of this too.

- 2022-10-01: Sakura on hiatus again. No new features, only bugfixes.

- The requirement bump to node 18 is due to fetch being implemented there. If you use node 17, you will not be able to use some commands.
