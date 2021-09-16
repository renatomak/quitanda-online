const { products } = require('../models');
const { messageError } = require("../util");

const findAllProducts = async () => {
  try {
    const result = await products.findAll();
    return result;
  } catch (error) {
    throw Error(error.message + messageError("buscar Produtores"));
  }
};

const findProductByPk = async (id) => {
  try {
    const product = await products.findByPk(id);

    return { product };
  } catch (error) {
    throw Error(error.message + messageError("buscar Produtor por ID"));
  }
};

const createProduct = async (product) => {
  try {
    const newProduct = await product.create(product);

    return newProduct;
  } catch (error) {
    throw Error(error.message + messageError("cadastrar Produtor"));
  }
};

const updateProduct = (id) => {};

const destroyProduct = (id) => {};


module.exports = {
  findAllProducts,
  findProductByPk,
  createProduct,
  updateProduct,
  destroyProduct,
};
