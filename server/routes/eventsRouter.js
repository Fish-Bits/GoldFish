const express = require('express');

const eventsControllers = require('../controllers/eventsControllers.js');


const router = express.Router();

router.get('/', 
  eventsControllers.getEvents, (req, res) => {
    res.status(200).json(res.locals.events);
})

router.get('/:id',
  eventsControllers.getDetails, (req, res) => {
    res.status(200).json(res.locals.details);
})

router.post('/',
  eventsControllers.createPost, (req, res) => {
    res.status(200).json(res.locals.createPost);
})

router.get('/:id/comment',
  eventsControllers.getComment, (req, res) => {
    res.status(200).json(res.locals.getComment);
})

router.post('/:id/comment',
  eventsControllers.createComment, (req, res) => {
    res.status(200).json(res.locals.createComment);
    res.status(200).json('hello');
})

router.put('/:id',
  eventsControllers.updatePost, (req, res) => {
    res.status(200).json(res.locals.updatePost);
})

router.delete('/:id',
  eventsControllers.deletePost, (req, res) => {
    res.status(200).json(res.locals.deletePost);
})

module.exports = router;



