//katherine 
// export { };
const db = require('../model/model.tsx');
const homeController = {

  //get all the profiles in database
  getProfiles: async (req, res, next) => {
    console.log('made it to getProfiles middleware')
    try {
      const data = await db.query(`
      SELECT Profiles.*, string_agg(Followers.follower_id:: varchar, ',') AS list
      FROM profiles
      LEFT OUTER JOIN followers ON profiles.id = followers.profile_id
      GROUP BY profiles.id; 
  `);
      console.log('getProfile query done')
      console.log("this is data backend:", data.rows);
      res.locals.allProfiles = data.rows;
      return next();
    } catch (err) {
      return next(err);
    }
  }

}

module.exports = homeController; 