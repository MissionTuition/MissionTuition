const db = require('../model/model.tsx')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)


module.exports = {
  //checking if email exists in database, if so get stored password
  getUserInfo: async (req, res, next) => {
    const {email} = req.body
    try {
      const data = await db.query('SELECT * FROM Users where email = $1', [email])
      res.locals.dataStore = data.rows[0]
      if (!data.rows.length) {
        alert('No User Found');
      }
      return next(); 
    } catch (err) {
      return next({err:'error in getUserInfo'})
    }
  
  }, 
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
        return next({err:'error in verifyUser'})
      });
  },


  // middleware for adding a new user to the db through signup
  createUser: async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body
    const user = await db.query('SELECT email FROM users WHERE email = $1', [email])
    console.log(user.rows)
    //if user doesnt exist, hash the password
    if (user.rows <= 0) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          console.log('whoops')
          return next(err)
        }
        db.query('INSERT INTO Users (firstName, lastname, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, hash])
        return next()
      })
    } else {
      console.log('This username already exists')
      return next('error')
    }
    // await db.query('INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)', [firstname, lastname, username, ]) // 'CREATE USER WITH VALUES
  },



}