const { products } = require('../models');
const { messageError } = require("../util");

const findAllProducts = async (skip, limit) => {
  try {
    const result = await products.findAll({
      offset: skip, limit:limit
    });
    return result;
  } catch (error) {
    throw Error(error.message + messageError("buscar Produtos"));
  }
};

const findProductByPk = async (id) => {
  try {
    const product = await products.findByPk(id);

    return { product };
  } catch (error) {
    throw Error(error.message + messageError("buscar Produto por ID"));
  }
};

const createProduct = async (product) => {
  try {
    const newProduct = await products.create(product);

    return newProduct;
  } catch (error) {
    throw Error(error.message + messageError("cadastrar Produto"));
  }
};

const updateProduct = async (product) => {
  try {
    const { id, name, price, description, quantity, type, url_image } = product;
    await products.update(
      { name, price, description, quantity, type, url_image },
      { where: { id } },
    );
    const result = await findProductByPk(id);

    return result
  } catch (error) {
    throw Error(error.message + messageError("atualizar o Produto"));
  }
};

const destroyProduct = async (id) => {
  try {
    await products.destroy(
      { where: { id } }
    );
    return true
  } catch (error) {
    throw Error(error.message + messageError("deletar o Produto"));
  }  
};


module.exports = {
  findAllProducts,
  findProductByPk,
  createProduct,
  updateProduct,
  destroyProduct,
};
