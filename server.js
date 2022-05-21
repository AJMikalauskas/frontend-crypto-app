const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://Xander_Mik:Isaiah558@passportapp.a92tx.mongodb.net/CryptosDB");

//require route
app.use("/", require("./routes/coinRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})