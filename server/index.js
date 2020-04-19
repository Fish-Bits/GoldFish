const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const passportSetup = require('./config/passport-setup')
const authRoutes = require('./routes/auth-routes')

const eventsRouter = require('./routes/eventsRouter.js')

app.use('/events', eventsRouter)
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/auth',authRoutes)

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
