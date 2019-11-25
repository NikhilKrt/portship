var express       = require('express');
var ObjectId      = require('mongoose').Types.ObjectId;

var config        = require('../config/database');

const manager		= require('./api/manager.api');
const agent			= require('./api/agent.api');
const task			= require('./api/task.api');
const job			= require('./api/job.api');

var router = express.Router();

router.use('/manager', manager);
router.use('/agent', agent);
router.use('/task', task);
router.use('/job', job);


module.exports = router;