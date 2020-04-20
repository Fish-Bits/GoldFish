const db = require('../models/eventsModels.js');

const eventsControllers = {};


eventsControllers.getEvents = async (req, res, next) => {
  const events = [];
  try{
    const text = `SELECT * FROM events`;
    const result = await db.query(text);

    // loop through each event
    for (let i = 0; i < result.rows.length; i++) {
      const event = { ...result.rows[i] };
      // count participants for each event
      const text2 = `
        SELECT COUNT(user_id) 
        FROM participants 
        WHERE event_id = $1
      `;
      const params = [ event.id ]
      const result2 = await db.query(text2, params);

      event.participants = [ ...result2.rows ];
      events.push(event);
    }
    res.locals.events = events;
    next();
  }
  
  catch(err){
    next({
      log: `eventsControllers.getEvents: error: ${err}`,
      message: { err: `Error in eventsControllers.getEvents: ${err}`}
    });
  }
};

eventsControllers.getDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    const text = `SELECT * FROM events WHERE id = $1`;
    const params = [id];
    const result = await db.query(text, params);
    res.locals.details = result.rows;
    next();
  }
  catch(err){
    next({
      log: `eventsControllers.getDetails: error: ${err}`,
      message: { err: `Error in eventsControllers.getDetails: ${err}`}
    });
  }
};

eventsControllers.createPost = async (req, res, next) => {
  console.log('req.body',req.body)
  const { name, location, date, description } = req.body;
  console.log('WE ARE TESTING')
  const user_id = 1;
  
  try {
    const text = `INSERT INTO events (name, location, date, description, user_id) VALUES ($1, $2, $3, $4, $5)`;
    const body = [name, location, date, description, user_id];
    const result = await db.query(text, body);
    res.locals.createPost = result.rows;
    next();
  }
  
  catch(err){
    next({
      log: `eventsControllers.createPosterror: ${err}`,
      message: { err: `Error in eventsControllers.createPost${err}`}
    });
  }
};

eventsControllers.updatePost = async (req, res, next) => {
  const { name, location, date, description, user_id } = req.body; // req.body comes from client and when user submits, fetch arrives from client with data
  const { id } = req.params;

  try {
    const text = 'UPDATE events SET name = $1, location = $2, date = $3, description = $4, user_id = $5 WHERE id = $6';
    const body = [name, location, date, description, user_id, id];
    const result = await db.query(text, body);
    res.locals.updatePost = result.rows;
    next();
  }
  
  catch(err){
    next({
      log: `eventsControllers.updatePost: error: ${err}`,
      message: { err: `Error in eventsControllers.updatePost: ${err}`}
    });
  }
};

eventsControllers.getComment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const text = `SELECT * FROM comments WHERE id = $1`;
    const params = [id];
    const result = await db.query(text, params);
    res.locals.getComment = result.rows[0];
    next();
  }
  catch(err){
    next({
      log: `eventsControllers.getComment: error: ${err}`,
      message: { err: `Error in eventsControllers.getComment: ${err}`}
    });
  }
}

eventsControllers.createComment = async (req, res, next) => {
  const { user_id, comment } = req.body;
  const { id } = req.params;
  try {
    const text = `INSERT INTO comments (user_id, event_id, comment) VALUES ($1, $2, $3)`;
    const params = [user_id, id, comment]
    const result = await db.query(text, params);
    res.locals.createComment = result.rows;
    next();
  }
  catch(err) {
    next({
      log: `events.Controller.createComment: error: ${err}`,
      message: { err: `Error in eventsControllers.createComment: ${err}`}
    })
  }
}

eventsControllers.deletePost = async (req, res, next) => {
  const { id } = req.params
  try{
    const text = `DELETE FROM events WHERE id = $1`;
    const params = [id];
    const result = await db.query(text, params);
    res.locals.deletePost = result.rows;
    next();
  }
  
  catch(err){
    next({
      log: `eventsControllers.deletePost: error: ${err}`,
      message: { err: `Error in eventsControllers.deletePost: ${err}`}
    });
  }
};

module.exports = eventsControllers