const express = require("express");
const userController = require("../../controllers/userController/userController");
const errorHandler = require('../../middlewares/errorHandler/errorhandler')
const router = express.Router();

// 
router.get('/', userController, errorHandler)


module.exports = router;