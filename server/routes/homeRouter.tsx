export { };
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController')

//display all profiles 
router.get('/', authController.verifyUser, homeController.getProfiles, (req, res, next) => {
  res.status(200).json(res.locals.allProfiles)
});

//add post here to check the cookies when implemented 


