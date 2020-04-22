const db = require('../models/eventsModels.js');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const usersControllers = {};

usersControllers.createUser = (req, res, next) => {
<<<<<<< HEAD
  console.log(req.body);
  const { username, password } = req.body;
  bcrypt
    .hash(password, SALT_WORK_FACTOR)
    .then((hashedPassword) => {
      console.log(hashedPassword);
      hashed_password = hashedPassword;
      const query = `INSERT INTO users (username, password) VALUES ($1, $2)`;
      db.query(query, [username, password]).then((user) => {
        res.locals.user = user;
      });
      return res.json({
        status: 'success',
      });
    })
    .catch(
      (err) => console.log(err)
      // next({
      //   log: `usersControllers.createUser: error: ${err}`,
      //   message: { err: `Error in usersControllers.createUser: ${err}` },
      // })
    );
=======
  const { username, password } = req.body
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
    .catch((err) => next({
      log: `usersControllers.createUser: error: ${err}`,
      message: { err: `Error in usersControllers.createUser: ${err}` }
    }))
>>>>>>> b3f8ac40695e0bc4efcfb4fa9ecd8bd5d8f05927
};

usersControllers.verifyUser = (req, res, next) => {
  const query = `SELECT * FROM users WHERE username = $1;`;
  db.query(query, [req.body.username])
<<<<<<< HEAD
    .then((result) => {
      const user = result.rows[0];
      res.locals.username = user.username;
      res.locals.userId = user.id;
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCorrect) => {
          if (passwordCorrect) return next();
          else return res.status(401).json({ success: false });
        });
    })
    .catch((err) =>
      next({
        log: `usersControllers.veryfyUser: error: ${err}`,
        message: { err: `Error in usersControllers.veryfyUser: ${err}` },
      })
    );
};
=======
    .then(result => {
      const user = result.rows[0]
      console.log('user', user)
      res.locals.username = user.username
      res.locals.userId = user.id
      const hash = bcrypt.hashSync(req.body.password, SALT_WORK_FACTOR)
      bcrypt.compare(req.body.password, hash)
        .then(passwordCorrect => {
          console.log("passwordCorrect", passwordCorrect)
          if (passwordCorrect) return next()
          else return res.status(401).json({ success: false })
        })
    })
    .catch((err) => next({
      log: `usersControllers.veryfyUser: error: ${err}`,
      message: { err: `Error in usersControllers.veryfyUser: ${err}` }
    }))
}
>>>>>>> b3f8ac40695e0bc4efcfb4fa9ecd8bd5d8f05927

module.exports = usersControllers;
