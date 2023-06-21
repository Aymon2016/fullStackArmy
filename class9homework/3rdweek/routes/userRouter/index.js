const express = require("express");
const LoginController = require("../../controllers/userController/loginController");
const RegisterContoller = require('../../controllers/userController/registerController')
const LogoutController = require('../../controllers/userController/logoutController')
const router = express.Router();


router.post('/login', LoginController)
router.post('/register', RegisterContoller)
router.get('/logout', LogoutController)


module.exports = router;