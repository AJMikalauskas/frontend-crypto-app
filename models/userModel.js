const mongoose = require("mongoose");

const userSchema = {
    firstName: String,
    lastName: String,
    email: String,
    password: String
}

const User = mongoose.model("User", userSchema);

module.exports = User;