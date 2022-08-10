//const PG_URI = require('../../.env')
// const { Pool } = require('pg')
// require('dotenv').config()

// PG_URI = process.env.DB_URI

// const pool = new Pool({
//   connectionString: PG_URI
// })

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', callback)
//     return pool.query(text, params, callback)
//   }
// }




const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.PG_URI
  });


  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };