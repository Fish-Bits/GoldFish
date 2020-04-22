const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersControllers = require('../controllers/usersControllers');

// router.post('/', db.getUserById, (req, res) => {
//   res.status(200).json({ username: res.locals.username, userId: res.locals.userId, success: true})
// })

//auth logout
router.get('/logout', (req, res) => {
  //handle with passport
  res.logout();
  res.redirect('/');
});

router.post('/login', usersControllers.verifyUser, (req, res) => {
  res
    .status(200)
    .json({
      username: res.locals.username,
      userId: res.locals.userId,
      token: res.locals.token,
      success: true,
    });
});

//auth with google
//we want passport to take control to interact with google and send user to consent screen
//let passport.authenticate use the google strategy
//when we pass in google, passport package knows that we want to use the google strategy we set up in passport-setup
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// callback route for google to redirect to
// passport sees the code query string and exchange the code with google profile information
// before moving on to the last middle ware that sends response, the callback function in passport-setup will be executed
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/home');
});

module.exports = router;
