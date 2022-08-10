const db = require('../model/model.tsx')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);


module.exports = {
  //checking if email exists in database, if so get stored password
  getUserInfo: async (req, res, next) => {
    console.log('made it to getUserInfo')
    const { email } = req.body
    try {
      const data = await db.query('SELECT * FROM Users where email = $1', [email])
      console.log('this returns the stored password for the user', data.rows[0])
      res.locals.dataStore = data.rows[0]
      if (!data.rows.length) {
        console.log('no users found')
        alert('No User Found');
      }
      return next(); 
    } catch (err) {
      return next({err:'error in getUserInfo'})
    }
  
  }, 
  // middleware for checking if the password of a given username matches the encrypted version of said password
  verifyUser: async (req, res, next) => {
    console.log('made it to verifyUser!!!!')
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
    console.log('made it to createUser!!')
    const { firstName, lastName, email, inputPassword } = req.body
    const user = await db.query('SELECT email FROM Users WHERE email = $1', [email])
    console.log('this should return email that already exists: ', user.rows)
    //if user email doesnt exist, hash the password
    if (user.rows <= 0) {
      console.log('made it to bcrypt hash!!')
      bcrypt.hash(inputPassword, salt, function (err, hash) {
        if (err) {
          console.log('whoops')
          return next(err)
        }
        db.query('INSERT INTO Users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, hash])
        return next()
      })
    } else {
      console.log('This username already exists')
      return next({err: 'error in createuser'})
    }
    
  },



}