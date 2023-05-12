const express = require('express')
const router = express.Router()
const middleware = require('./middleware');
const { aboutcontroller, homecontroller } = require('./controller');

// router.get('/', middleware, controller)
router.get('/about', middleware, aboutcontroller)
router.get('/home', middleware, homecontroller)

module.exports = router