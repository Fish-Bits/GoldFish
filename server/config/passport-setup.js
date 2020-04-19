const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const db = require('../models/eventsModels.js');
require('dotenv').config();

//when the done method is called inside the passport callback function
//move on to serializer
//send user id to the next method for cookies
passport.serializeUser((user, done) => {
  console.log('usere serializer', user)
  done(null, user.id)
})

//retrieve user id from the cookie
passport.deserializeUser((id, done) => {
  const findUserByIdQuery = `SELECT * FROM users WHERE id = $1;`
  db.query(findUserByIdQuery, [id])
    .then(user => {
      console.log('deserializeUser', user)
      done(null, user);
    })
})

passport.use(
  new GoogleStrategy({
  //options for the google strategy
  callbackURL: '/auth/google/redirect',
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET
  }, (accessToken, refreshToken, profile, done) => {
    //check if user already exists in db
    const findUserQuery = `SELECT * FROM users WHERE google_id = $1;`
    db.query(findUserQuery, [profile.id])
    .then(result => {
      console.log(result.rows)
      if(result.rows.length > 0){
        const user = result.rows[0]
        console.log('user is ', user)
        done(null, user)
      } else {
        //create user in db
        let createUserQuery = `INSERT INTO users (username, google_id) VALUES ($1, $2) RETURNING *`
        db.query(createUserQuery, [profile.name.givenName + profile.name.familyName, profile.id])
          .then(user => {
            console.log('user',user)

            console.log('new user created' + user.rows[0]);
            done(null, user.rows[0])
          })
      }
    })
    .catch((err)=> console.log('passport google stragety', err))
  })
)
