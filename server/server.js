const express = require('express');
const path = require('path');
const port = 3000;
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
require('dotenv').config();

const authRoutes = require('./routes/auth-routes');
const userSignUpRoute = require('./routes/userSignupRoute');
const eventsRouter = require('./routes/eventsRouter.js');

const usersControllers = require('./controllers/usersControllers');

//App
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY],
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//Below are hardcoded features
// app.get('/create', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });

// app.get('/login', function (req, res) {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });
app.get('/home', usersControllers.isAuth);

//Routes
app.use('/events', eventsRouter);
app.use('/', userSignUpRoute);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'An error occurred' + err },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
