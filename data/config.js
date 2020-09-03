const knex = require("knex")
const knexfile = require("../config")

module.exports = knex(knexfile)