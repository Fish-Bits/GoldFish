const db = require('../models/eventsModels.js');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

const usersControllers = {};

usersControllers.createUser = (req, res, next) => {
  const { username, password } = req.body;
  bcrypt
    .hash(password, SALT_WORK_FACTOR)
    .then((hashedPassword) => {
      console.log(hashedPassword);
      hashed_password = hashedPassword;
      const query = `INSERT INTO users (username, password) VALUES ($1, $2)`;
      db.query(query, [username, hashed_password]).then((user) => {
        res.locals.user = user;
      });
      return res.json({
        status: 'success',
      });
    })
    .catch((err) => console.log(err));
};

//Authorization: bearer <token>
usersControllers.isAuth = (req, res) => {
  const authHeader = req.headers['authorization'];
  console.log('this is the headers request', authHeader);
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
  });
};

usersControllers.signout = (req, res) => {
  res.clearCookie('t');
  res.json({ message: 'user signout success' });
};

usersControllers.verifyUser = (req, res, next) => {
  const query = `SELECT * FROM users WHERE username = $1;`;
  db.query(query, [req.body.username]).then((result) => {
    const user = result.rows[0];
    res.locals.user = user;
    bcrypt.compare(req.body.password, user.password).then((passwordCorrect) => {
      if (passwordCorrect) {
        console.log('password correct', passwordCorrect);

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        res.cookie('t', token, { expire: new Date() + 9999 });

        const { id, username } = user;
        console.log(id, username);
        res.status(200).json({
          username: username,
          userId: id,
          success: true,
          token: token,
        });
      } else {
        console.log('incorrect');
        res.status(401).json({ success: false });
      }
    });
  });
};

module.exports = usersControllers;
