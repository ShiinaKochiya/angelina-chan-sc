const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "connect4",
    alias: ["c4"],
    description: "fun",
    
    async run(message, args, client) {
            var playfield = [[]]
            var playfieldDisplay = [[]]
          const collector = message.channel.createMessageCollector(
            msg => msg.author.id == message.author.id,
            {time: 6000}
          );
            
            for await (const msg of collector) {

            }
          // This will be sent when the collector ends (when time runs out or if you
          // manually stop it with collector.stop())
        message.reply(`Game over`);
        
    }
});

function checkWin(posx, posy, type){
  var win = false;
  //X pos: 3 or lower
  if (posx < 4){
    //Y pos: 3 or lower
    if (posy < 4) {
      if (checkRight(posx, posy, type) || checkTop(posx, posy, type) || checkTopRight(posx, posy, type)) {win = true}
    }
    //Y pos: 4 or higher
    else if (posy > 3) {
      if (checkRight(posx, posy, type) || checkBot(posx, posy, type) || checkBotRight(posx, posy, type)) {win = true}
    }
  }
  //X pos: 5 or higher
  else if (posx > 4){
    //Y pos: 3 or lower
    if (posy < 4) {
      if (checkLeft(posx, posy, type) || checkTop(posx, posy, type) || checkTopLeft(posx, posy, type)) {win = true}
    }
    //Y pos: 4 or higher
    else if (posy > 3) {
      if (checkLeft(posx, posy, type) || checkBot(posx, posy, type) || checkBotLeft(posx, posy, type)) {win = true}
    }
  }
  //X pos: 4
  else if (posx == 4){
    //Y pos: 3 or lower
    if (posy < 4) {
      if (checkLeft(posx, posy, type) || checkTop(posx, posy, type) || checkTopLeft(posx, posy, type) || checkRight(posx, posy, type) || checkTopRight(posx, posy, type)) {win = true}
    }
    //Y pos: 4 or higher
    else if (posy > 3) {
      if (checkLeft(posx, posy, type) || checkBot(posx, posy, type) || checkBotLeft(posx, posy, type) || checkRight(posx, posy, type) || checkBotRight(posx, posy, type)) {win = true}
    }
  }


}

function checkLeft(posX,posY, playerType){
  let res = true;
  for (let i = posX; i > posX-5; i--){
    if(playfield[i, posY] !== playerType) {
      res = false;
      break;
    }
  }
  return res;
}

function checkRight(posX,posY, playerType){
  let res = true;
  for (let i = posX; i < posX+5; i++){
    if(playfield[i, posY] !== playerType) {
      res = false;
      break;
    }
  }
  return res;
}

function checkTop(posX,posY, playerType){
  let res = true;
  for (let i = posY; i < posY+5; i++){
    if(playfield[posX, i] !== playerType) {
      res = false;
      break;
    }
  }
  return res;
}

function checkBot(posX,posY, playerType){
  let res = true;
  for (let i = posY; i > posY-5; i--){
    if(playfield[posX, i] !== playerType) {
      res = false;
      break;
    }
  }
  return res;  
}

function checkTopLeft(posX,posY, playerType){
  let res = true;
  for (let i = 0; i < 5; i++){
    if(playfield[posX-i, posY+i] !== playerType) {
      res = false;
      break;
    }
  }
  return res;
}

function checkTopRight(posX,posY, playerType){
  let res = true;
  for (let i = 0; i < 5; i++){
    if(playfield[posX+i, posY+i] !== playerType) {
      res = false;
      break;
    }
  }
  return res;
}

function checkBotLeft(posX,posY, playerType){
  let res = true;
  for (let i = 0; i < 5; i++){
    if(playfield[posX-i, posY-i] !== playerType) {
      res = false;
      break;
    }
  }
  return res;
}

function checkBotRight(posX,posY){
  let res = true;
  for (let i = 0; i < 5; i++){
    if(playfield[posX+i, posY-i] !== playerType) {
      res = false;
      break;
    }
  }
  return res;
}