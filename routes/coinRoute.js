const express = require("express");
const router = express.Router();
const Coin = require("../models/coinModel");

//
router.route("/create").post(
    
    async(req,res) => {

    // const client = await MongoClient.connect("mongodb+srv://Xander_Mik:Isaiah558@passportapp.a92tx.mongodb.net/CryptosDB?retryWrites=true&w=majority")

    // const db = client.db();
    // const coinsCollection = db.collection('coins');
    // const result = await coinsCollection.insertMany(req.body);

    // console.log(result);
    // client.close();
    // res.status(201).json({message: "Coins Inserted!"});
    console.log(req.body.length);
    for(let i = 0; i< req.body.length; i++) {
       // console.log(req.body);
    //console.log(req.body);
    const id = req.body[i].id;
    const symbol = req.body[i].symbol;
    const name = req.body[i].name;
    const image = req.body[i].image;
    const currentPrice = req.body[i].currentPrice;

    const newCoin = new Coin({
        id,
        symbol,
        name,
        image,
        currentPrice
    });

    newCoin.save();
}
    //console.log(req.body);
});

module.exports = router;