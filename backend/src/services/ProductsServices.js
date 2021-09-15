const { products } = require('../models');

const getAllProducts = async () => {
  try {
    const result = await products.findAll();
    return result;
  } catch (error) {
    const message = 'ERRO ao buscar os produtos - metódo: getAllProducts' + error.message;
    throw new Error(message)
  }
};

module.exports = {
  getAllProducts,
};
