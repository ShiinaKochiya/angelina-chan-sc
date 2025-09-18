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


const Pity = mongoose.model("pity", pitySchema);
module.exports = Pity;
