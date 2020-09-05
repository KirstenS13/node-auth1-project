const express = require("express")
const Users = require("./users-model")
const bcrypt = require("bcryptjs")

const router = express.Router()

// create an account
// use POST for creating a user
router.post("/register", async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await Users.findBy({ username }).first()

        if (user) {
            return res.status(409).json({
                message: "Username is already taken",
            })
        }

        const newUser = await Users.add({
            username: username,
            password: await bcrypt.hash(password, 14)
        })

        res.status(201).json(newUser)

    } catch (err) {
        next(err)
    }
})

// login
// use POST for logging in
router.post("/login", async (req, res, next) => {
    try {
        res.json({
            message: "This is the login endpoint"
        })
    } catch (err) {
        next(err)
    }
})

// get list of users if logged in
router.get("/users", async (req, res, next) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        next(err)
    }
})

module.exports = router