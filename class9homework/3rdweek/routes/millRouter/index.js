

const express = require("express");
const router = express.Router();

const createMillController = require('../../controllers/millController/createMillController')
const getAllMillContoller = require('../../controllers/millController/getAllMillController')
const getOneUserMillController = require('../../controllers/millController/getOneUserMillController')
const deleteMillController = require('../../controllers/millController/deleteMillController')
const authenticationMidleware = require('../../middlewares/authentication/authentication')


router.post('/', authenticationMidleware, createMillController)
router.get('/', authenticationMidleware, getAllMillContoller)
router.get('/:id', authenticationMidleware, getOneUserMillController)
router.delete('/:id', authenticationMidleware, deleteMillController)

module.exports = router;
