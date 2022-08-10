export { };
const express = require('express');
const profileController = require('../controllers/profileController.tsx')
const { verifyUser, createUser } = require('./controllers/authController');
const router = express.Router();


//GET request to get the logged-in user profile from database
router.get('/profile', verifyUser, profileController.getUserProfile,
  (req, res) => { return res.status(200).json(res.locals.userProfile) });


//POST request to save user profile to database
router.post('/profile', verifyUser, profileController.createProfile,
  (req, res) => { return res.status(200).json('sucessfully created profile') });

//UPDATE request to update user post in database
router.update('/profile', verifyUser, profileController.updateProfile,
  (req, res) => { return res.status(200).json('successfully updated profile') });