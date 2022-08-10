//katherine 
//const db = require('../model/model.tsx');

export { };
const cookieController = {
  setCookie: async (req, res, next) => {
    try {

      await res.cookie('admin access', 'true')
      return next();
    } catch (err) {
      return next({ err: 'error in setCookie' })
    }
  },

  //lets see if this works or not 
  setSSIDCookie: async (req, res, next) => {
    const { username, password } = req.body
    try {
      const data = db.query(`
    SELECT id, username, password
    FROM users
    WHERE username = $1 AND password = $2
    RETURNING *; 
    `, [username, password])
      if (!data.rows.length) {
        console.log("user not in database")
      }
      // res.locals.ssid: any = `${data}` + 'user_id'
      res.cookie('ssid', res.locals.ssid, { httpOnly: true })
      return next();
    } catch (err) {
      return next({ err: 'error in setSSID' });
    }
  }
}
module.exports = cookieController; 