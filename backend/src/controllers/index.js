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
};
