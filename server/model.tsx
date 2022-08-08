const URI = require('../.env')
const Pool = require('pg')

const pool = new Pool();
pool.connect(URI)