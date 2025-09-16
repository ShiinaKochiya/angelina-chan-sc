const { mongo } = require("mongoose")
const { mongoose } = require("./mongoose")

const  pitySchema =  new mongoose.Schema({
    "userID": {
        type: String,
        required: true
    },
    "wuwaPity":{
        type: Number,
        required: true
    },
    "arknightsPity":{
        type: Number,
        required: true
    }
})

const moneySchema = new mongoose.Schema({
    "userID":{
        type: String,
        required: true
    },
    "money":{
        type: Number,
        required: true
    }
})

const Pity = mongoose.model("pity", pitySchema);
const Money = mongoose.model("money", moneySchema);
module.exports = Pity;
module.exports = Money;