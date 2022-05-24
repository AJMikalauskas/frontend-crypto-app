const express = require("express");
//instance of express router, we use it to define routes for API
const router = express.Router();
const Coin = require("../models/coinModel");
//This will help to connect to DB
//const dbo = require("../db/conn");
// This helps convert the id from string to ObjectId for the _id.
//const ObjectId = require("mongodb").ObjectId;



//
// router.route("/create").post(
    
//     async(req,res) => {

//     // const client = await MongoClient.connect("mongodb+srv://Xander_Mik:Isaiah558@passportapp.a92tx.mongodb.net/CryptosDB?retryWrites=true&w=majority")

//     // const db = client.db();
//     // const coinsCollection = db.collection('coins');
//     // const result = await coinsCollection.insertMany(req.body);

//     // console.log(result);
//     // client.close();
//     // res.status(201).json({message: "Coins Inserted!"});
// //     console.log(req.body.length);
// //      for(let i = 0; i< req.body.length; i++) {
// // //        // console.log(req.body);
// // //     //console.log(req.body);
// //     const id = req.body[i].id;
// //     const symbol = req.body[i].symbol;
// //     const name = req.body[i].name;
// //     const image = req.body[i].image;
// //     const currentPrice = req.body[i].currentPrice;

// //     const newCoin = new Coin({
// //         id,
// //         symbol,
// //         name,
// //         image,
// //         currentPrice
// //     });

// //      newCoin.save();
// //     }
//      console.log(req.body);
//  });

//retrieve data -> POST req test
// router.route("/retrieve").post((req,res) => {
//     const id = req.body.id;
//     console.log(req.body);
//     Coin.find({id: id})
//         .then(foundCoins => res.json(foundCoins));
// })

// retrieve data but by GET request
router.route("/coinsData").get((req,res) => {
   // Gets all coins, this is currently the best way to do so
    Coin.find()
        .then(foundCoins => res.json(foundCoins));
    
    
    
    
    
    // finds and retrieves coins based on search, uses query of the id entered to filter the data
        // Tried to create a partial search, but failed, it seems that you still need a full word such as bitcoin
            // can't filter results by by => use regex not search???
//     let db_connect = dbo.getDb();
//     let id = req.body.id;
//     //let myquery = { id: id};
//     // console.log(req.body);
//     // Coin.createIndexes({ id: "text"});
//     // Coin.find({$text: {$search: id}})
//     //     .then(foundCoins => res.json(foundCoins));

//     db_connect
//     .collection("coins")
//     .find({ "id" : { $regex: new RegExp(id)}
// }, function(err,data) {
//     res.json(data);
//     console.log(data);
// }).limit(10);

    // .then( returnedCoins => console.log(returnedCoins))
    // .catch(err => console.log(err)); 
    //console.log(wantedRes);
    //.then(foundCoins => console.log(foundCoins));
    // .find(myquery, (err, result) => {
    //     if(err) throw err;
    //     let newRes = res.json(result);
    //     console.log(newRes);
    // })
})

module.exports = router;