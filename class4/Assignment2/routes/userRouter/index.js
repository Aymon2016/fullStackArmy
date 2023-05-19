const express = require("express");
const userController = require("../../controllers/userController/userController");
const userMiddleware = require('../../middlewares/userMiddlewares/userMiddleware')
const router = express.Router();

// 
router.get('/', userMiddleware, userController)


module.exports = router;