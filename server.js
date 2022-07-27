const express = require("express");
const app = express();
const cors = require("cors");
//require("dotenv").config({ path: "./config.env" });
//const port = process.env.PORT || 5000;

// uses mongoose url connect in env and other files
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//get driver connection?
//const dbo = require("./db/conn");

//connect to mongoose
mongoose.connect("mongodb+srv://Xander_Mik:Isaiah558@passportapp.a92tx.mongodb.net/CryptosDB");

//require route
app.use("/", require("./routes/coinRoute"));
app.use("/", require("./routes/userRoute"));

app.listen(3001, function() {

    // dbo.connectToServer((err) => {
    //     if(err) console.error(err);
    // })
    console.log("Server is running on port 3001");
})