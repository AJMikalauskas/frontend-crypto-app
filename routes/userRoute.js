const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Adding user or posting a new user to the Database of Users
router.route("/createUser").post((req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body.firstName)

    const newUser = new User({
        firstName,
        lastName,
        email,
        password
    })

    newUser.save();
})

router.route("/retrieveUsers").get((req,res) => {
    let allUsers = User.find()
    .then(foundUsers => res.json(foundUsers));
    console.log(allUsers);
})

module.exports = router;