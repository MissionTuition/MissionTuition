const URI = require('../.env')
const Pool = require('pg')

const pool = new Pool({
  connectionString: URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', callback)
    return pool.query(text, params, callback)
  }
}
