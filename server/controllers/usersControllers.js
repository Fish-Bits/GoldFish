const db = require('../models/eventsModels.js');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

const usersControllers = {};

usersControllers.createUser = (req, res, next) => {
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
    .catch((err) => console.log(err));
};

usersControllers.verifyUser = (req, res, next) => {
  const query = `SELECT * FROM users WHERE username = $1;`;
  db.query(query, [req.body.username])
    .then((result) => {
      const user = result.rows[0];
      console.log('user', user);
      res.locals.username = user.username;
      res.locals.userId = user.id;
      res.locals.user = user;
      const hash = bcrypt.hashSync(req.body.password, SALT_WORK_FACTOR);
      bcrypt.compare(req.body.password, hash).then((passwordCorrect) => {
        console.log('passwordCorrect', passwordCorrect);
        if (passwordCorrect) {
          console.log('jwt process begins');
          const token = jwt.sign(
            { id: res.locals.userId },
            process.env.JWT_SECRET
          );
          console.log(token);
          res.cookie('t', token, { expire: new Date() + 9999 });

          console.log(res.locals.user);

          const { id } = res.locals.user;

          return res.status(200).json({ token, user: { id } });
        } else return res.status(401).json({ success: false });
      });
    })
    .catch((err) =>
      next({
        log: `usersControllers.veryfyUser: error: ${err}`,
        message: { err: `Error in usersControllers.veryfyUser: ${err}` },
      })
    );
};

module.exports = usersControllers;
