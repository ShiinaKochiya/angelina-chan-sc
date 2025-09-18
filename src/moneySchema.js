const { mongo } = require("mongoose")
const { mongoose } = require("./mongoose")

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

const Money = mongoose.model("money", moneySchema);

module.exports = Money;
