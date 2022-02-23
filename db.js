const Pool =require('pg')
const pool = new Pool({
    user: 'Viktor',
    password: 'qwerty',
    host: 'localhost',
    port: 5432,
})

module.exports = pool