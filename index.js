const express = require("express")
const usersRouter = require("./users/users-router")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

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