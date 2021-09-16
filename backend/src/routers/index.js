const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/products', Controller.getProducts);
router.get('/products/:id', Controller.getProductById);

module.exports = router;