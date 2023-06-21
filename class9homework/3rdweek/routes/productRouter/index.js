

const express = require("express");
const router = express.Router();

const createProductController = require('../../controllers/productController/createProductController')
const getAllProductContoller = require('../../controllers/productController/getAllProductController')
const getOneProductController = require('../../controllers/productController/getOneProductController')
const deleteProductController = require('../../controllers/productController/deleteProductController')
const authenticationMidleware = require('../../middlewares/authentication/authentication')

router.post('/', authenticationMidleware, createProductController)
router.get('/', getAllProductContoller)
router.get('/:id', authenticationMidleware, getOneProductController)
router.delete('/:id', authenticationMidleware, deleteProductController)

module.exports = router;

