const { Pool } = require('pg')

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'likeme',
    port: 5432,
    allowExitOnIdle: true
})

module.exports = { pool }