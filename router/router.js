const express = require('express');

const router = express.Router();

const logger = require('../middleware/logger.js')

const{getUsers, createUser} = require('../controller/user');


router.get('/getUsers', logger,  getUsers);

router.post('/createUser', createUser);

module.exports =router;