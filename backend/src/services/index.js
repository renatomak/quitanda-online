const {
  findAllProducts,
  findProductByPk,
  createProduct,
  updateProduct,
  destroyProduct,
} = require('./ProductsServices');
const {
  findAllUsers,
  findUserByPk,
  createUser,
  updateUser,
  destroyUser,
} = require('./UsersServices');

module.exports = {
  findAllProducts,
  findProductByPk,
  createProduct,
  updateProduct,
  destroyProduct,
  findAllUsers,
  findUserByPk,
  createUser,
  updateUser,
  destroyUser,
};
