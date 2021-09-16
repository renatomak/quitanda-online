const {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  changeProduct, } = require('./ProductsController');
const {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  changeUser,
} = require('./UserController')
const {
  getAddress,
  getAddressById,
  addAddress,
  deleteAddress,
  changeAddress,
} = require('./AddressController')
const {
  getOrders,
  getOrderById,
  addOrder,
  deleteOrder,
  changeOrder,
} = require('./OrderController')

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  changeProduct,
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  changeUser,
  getAddress,
  getAddressById,
  addAddress,
  deleteAddress,
  changeAddress,
  getOrders,
  getOrderById,
  addOrder,
  deleteOrder,
  changeOrder,
};
