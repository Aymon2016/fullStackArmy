const express = require("express");
const router = express.Router();

const createNoticeController = require('../../controllers/noticeController/createNoticeController')
const getAllNoticeContoller = require('../../controllers/noticeController/getAllNoticeController')
const getOneNoticeController = require('../../controllers/noticeController/getOneNoticeController')
const deleteNoticeController = require('../../controllers/noticeController/deleteOneNoticeController')
const authenticationMidleware = require('../../middlewares/authentication/authentication')

router.post('/', authenticationMidleware, createNoticeController)
router.get('/', authenticationMidleware, getAllNoticeContoller)
router.get('/:id', authenticationMidleware, getOneNoticeController)
router.delete('/:id', authenticationMidleware, deleteNoticeController)

module.exports = router;

