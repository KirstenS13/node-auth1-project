const express = require("express")

const router = express.Router()

// create an account
// use POST for creating a user
router.post("/register", async (req, res, next) => {
    try {
        res.json({
            message: "This is the register endpoint"
        })
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
        res.json({
            message: "This is the users endpoint"
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router