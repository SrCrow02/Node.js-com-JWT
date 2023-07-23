const express = require("express")
const User = require("../models/user")
const router = express.Router();

router.post("/register", async(req, res) => {
    try {
        const user = await User.create(req.body)

        return res.send({ user })
    } catch(err) {
        res.status(400).send({ Error: "Registration failed"})
    }
})


module.exports = app => app.use('/auth', router)