export { };
const Session = require('../model/model.tsx');

const sessionController = {};
//check if the user has cookie 
//if so, let them have access 
//if not, redirect to login => res.redirect 

//create and save a new Session into the database
sessionController.startSession = async (req, res, next) => {
  const {
    cookie_id,
    user_id
  } = req.body;

  try {
    await db.query(`INSERT INTO sessions(cookie_id, user_id)
    VALUES ($1, $2)`,
      [cookie_id, user_id]);
    return next();
  } catch (err) {
    return next(err);
  }
};

//find the appropriate session for this request in the database, then verify whether or not the session is still valid.
//check if the user has already logged in, 
//if not, redirect them to login 

sessionController.isLoggedIn = async (req, res, next) => {
  const { cookie_id } = req.body;
  console.log('cookie_id in isLoggedIn', cookie_id);
  try {
    let result = await db.query(`SELECT cookie_id FROM Sessions WHERE cookie_id = $1
    VALUES ($1)`,
      [cookie_id]);

    //if no session found, redirect to signup
    if (!result.rows.length) {
      res.redirect('/login');
    }
    //if session is found
    return next();

  } catch (err) {
    return next(err);
  }

};



module.exports = sessionController;