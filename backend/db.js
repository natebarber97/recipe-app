const Pool = require('pg').Pool;
require ('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PSWD,
    port: process.env.DB_PORT
})

try {
    pool.connect()
    console.log("Successfully connected to db")
} catch (err) {
    console.log("Could not connect to DB")   
}

module.exports = pool