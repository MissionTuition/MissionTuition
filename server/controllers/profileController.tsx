// export { };
const db = require('../model/model.tsx');
const profileController = {

  //get one user profile 
  getUserProfile: async (req, res, next) => {
    const { user_id } = req.body;
    try {
      const data = await db.query(`
      SELECT Profiles.*, string_agg(Followers.follower_id:: varchar, ',') AS list
      FROM profiles
      LEFT OUTER JOIN followers ON $1 = followers.profile_id
      GROUP BY profiles.id; 
      `, [user_id]);

      res.locals.userProfile = data.rows;
      return next();
    } catch (err) {
      return next(err);
    }
  },
  //create user profile 
  createProfile: async (req, res, next) => {
    //add donate here to req.body
    const { picture, summary, qr_code, donation } = req.body;
    try {
      await db.query(
        `INSERT INTO Profiles (picture, summary, qr_code, donation)
        VALUES($1, $2, $3, $4); 
        `, [picture, summary, qr_code, donation])
      console.log('successful post')
      return next();
    } catch (err) {
      return next({ err: 'error in createProfile' });
    }
  },

  //make changes to profile
  updateProfile: async (req, res, next) => {
    const { user_id, summary, profilePic, qr_code, donation } = req.body;
    try {
      const data = await db.query(`
        UPDATE Profiles SET (summary, profilePic, qr_code, donation) = ($1, $2, $3, $4) WHERE user_id = $5
        `, [summary, profilePic, qr_code, donation, user_id]);
      console.log('successfully updated')
      return next();

    } catch (err) {
      return next({ err: 'Error in updateProfile' });
    }
  }

}

module.exports = profileController;

