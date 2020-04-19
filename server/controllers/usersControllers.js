const db = require('../models/eventsModels.js');
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const usersControllers = {};

usersControllers.createUser = (req, res, next) => {
  const  { username, password } = req.body
  bcrypt.hash(req.body.password, SALT_WORK_FACTOR)
    .then(hashedPassword => {
      password = hashedPassword; 
      const query = `INSERT INTO users (username, password) VALUES ($1, $2)`
      db.query(query, [username, password])
        .then(user => {
          res.locals.user = user;
          return next();
        })
    })
    .catch((err)=> next({
      log: `usersControllers.createUser: error: ${err}`,
      message: { err: `Error in usersControllers.createUser: ${err}`}
    }))
};


usersControllers.verifyUser = (req, res, next) => {
  const query = `SELECT * FROM users WHERE username = $1;`
  pool.query(query, [req.body.username])
    .then(result => {
      const user = result.rows[0]
      res.locals.username = user.username
      res.locals.userId = user.id
      bcrypt.compare(req.body.password, user.password)
        .then(passwordCorrect => {
          if(passwordCorrect) return next()
          else return res.status(401).json({success: false})
        })
    })
    .catch((err)=> next({
      log: `usersControllers.veryfyUser: error: ${err}`,
      message: { err: `Error in usersControllers.veryfyUser: ${err}`}
    }))
}

module.exports = usersControllers