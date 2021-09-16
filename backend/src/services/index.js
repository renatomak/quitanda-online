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
const {
  findAllAddress,
  findAddressByPk,
  createAddress,
  updateAddress,
  destroyAddress,
} = require('./AddressServices');

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
  findAllAddress,
  findAddressByPk,
  createAddress,
  updateAddress,
  destroyAddress,
};
