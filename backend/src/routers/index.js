const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/products', Controller.getProducts);
router.get('/products/:id', Controller.getProductById);
router.post('/products', Controller.addProduct);
router.put('/products/:id', Controller.changeProduct);
router.delete('/products/:id', Controller.deleteProduct);

router.get('/users', Controller.getUsers);
router.get('/users/:id', Controller.getUserById);
router.post('/users', Controller.addUser);
router.put('/users/:id', Controller.changeUser);
router.delete('/users/:id', Controller.deleteUser);

router.get('/addresses', Controller.getAddress);
router.get('/addresses/:id', Controller.getAddressById);
router.post('/addresses', Controller.addAddress);
router.put('/addresses/:id', Controller.changeAddress);
router.delete('/addresses/:id', Controller.deleteAddress);

router.get('/orders', Controller.getOrders);
router.get('/orders/:id', Controller.getOrderById);
router.post('/orders', Controller.addOrder);
router.put('/orders/:id', Controller.changeOrder);
router.delete('/orders/:id', Controller.deleteOrder);

module.exports = router;