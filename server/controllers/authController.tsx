const db = require('../model/model.tsx')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)


module.exports = {

  // middleware for checking if the password of a given username matches the encrypted version of said password
  verifyUser: async (req, res, next) => {
    const { inputPassword } = req.body
    const { password } = res.locals.dataStore
    await bcrypt.compare(inputPassword, password)
      .then((response) => {
        res.locals.loginResult = response
        console.log('bcrypt response: ', res.locals.loginResult)
        return next()
      })
      .catch((err) => {
        return next(err)
      });
  },


  // middleware for adding a new user to the db through signup
  createUser: async (req, res, next) => {
    const { firstname, lastname, username, inputPassword } = req.body
    const user = await db.query('SELECT username FROM users WHERE username = $1', [username])
    console.log(user.rows)
    //if user doesnt exist, hash the password
    if (user.rows <= 0) {
      bcrypt.hash(inputPassword, salt, function (err, hash) {
        if (err) {
          console.log('whoops')
          return next(err)
        }
        db.query('INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)', [firstname, lastname, username, hash])
        return next()
      })
    } else {
      console.log('This username already exists')
      return next('error')
    }
    // await db.query('INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)', [firstname, lastname, username, ]) // 'CREATE USER WITH VALUES
  },



}