const mongoose = require("mongoose");

const coinSchema = {
    id: String,
    symbol: String,
    name: String,
    image: String,
    currentPrice: Number
}

const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;