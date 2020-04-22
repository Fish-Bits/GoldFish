const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/usersControllers');

router.post('/signup', createUser);

module.exports = router;
