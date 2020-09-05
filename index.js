const express = require("express")
// import express session
const session = require("express-session")
// import connect session knex
const KnexSessionStore = require("connect-session-knex")(session)
const usersRouter = require("./users/users-router")
// import db
const db = require("./data/config")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())
// don't forget to use express session - your login endpoint won't work otherwise
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "keep it secret, keep it safe",
    store: new KnexSessionStore({
        knex: db,
        createtable: true,
    })
}))

server.use("/api", usersRouter)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong. Please try again later."
    })
})

server.get("/", (req, res, next) => {
    res.json({
        message: "Hello, I am the server"
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})