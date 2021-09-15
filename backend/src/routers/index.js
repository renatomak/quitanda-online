const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/products', Controller.getProducts);

module.exports = router;