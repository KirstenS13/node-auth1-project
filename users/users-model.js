const db = require("../data/config")

// find
function find() {
    return db("users").select("id", "username")
}

// findBy
function findBy(filter) {
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}

// findById
function findById(id) {
    return db("users")
        .select("id", "username")
        .where({ id })
        .first()
}

// add
async function add() {
    const [id] = await db("users").insert(user)
    return findById(id)
}

module.exports = {
    find,
    findBy,
    findById,
    add
}