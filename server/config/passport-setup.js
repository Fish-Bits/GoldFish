const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.use(
  new GoogleStrategy({
  //options for the google strategy
  callbackURL: '/auth/google/redirect',
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET
  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile)
  })
)
