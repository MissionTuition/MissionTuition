// export { };
const express = require('express');
const router = express.Router();
const { getUserInfo, verifyUser, createUser } = require('../controllers/authController.tsx');
const homeController = require('../controllers/homeController.tsx');
const profileController = require('../controllers/profileController.tsx');


//Sign up and log in routes
router.post('/signup', createUser, (req, res) => { 
  console.log('made it to apiRouter signup');
  return res.send('User created successfully!') });

router.post('/login', getUserInfo, verifyUser, (req, res) => { 
  console.log('made it to apiRouter login!')
  return res.status(200).json(res.locals.loginResult)});


//Profile routes
//GET request to get the logged-in user profile from database
router.get('/profile', verifyUser, profileController.getUserProfile,(req, res) => { 
  return res.status(200).json(res.locals.userProfile) });

//POST request to save user profile to database
router.post('/profile', verifyUser, profileController.createProfile,
  (req, res) => { return res.status(200).json('sucessfully created profile') });
  
//UPDATE request to update user post in database
router.patch('/profile', verifyUser, profileController.updateProfile,
  (req, res) => { return res.status(200).json('successfully updated profile') });
  
  
//Home route
//display all profiles 
router.get('/', verifyUser, homeController.getProfiles, (req, res, next) => {
    res.status(200).json(res.locals.allProfiles)
  });

module.exports = router