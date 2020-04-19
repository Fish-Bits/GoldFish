const db = require('../models/eventsModels.js');
require('dotenv').config();

const eventsControllers = {};


eventsControllers.getEvents = async (req, res, next) => {
  try{
    const text = `SELECT * FROM events`;
    const result = await db.query(text);
    res.locals.events = result.rows;
    next();
  }
  
  catch(err){
    next({
      log: `eventsControllers.getEvents: error: ${err}`,
      message: { err: `Error in eventsControllers.getEvents: ${err}`}
    });
  }
};

module.exports = eventsControllers