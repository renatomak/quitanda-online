const rescue = require('express-rescue');

const {
  findAllProducts,
  findProductByPk,
  createProduct,
  updateProduct,
  destroyProduct,
} = require('../services');

const {
  STATUS_201_CREATED,
  STATUS_400_BAD_REQUEST,
  STATUS_200_OK,
  STATUS_204_NO_CONTENT,
} = require("../util");



const getProducts = rescue(async (req, res) => {
  try {
    const { page } = req.params;
    const result = await findAllProducts(page);

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(STATUS_400_BAD_REQUEST).json({ message: 'Bad request' });
  }
});

const getProductById = rescue(async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findProductByPk(id);

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields " + error.message });
  }
});

const addProduct = rescue(async (req, res) => {
  try {
    const { body } = req;

    const result = await createProduct(body);

    return res.status(STATUS_201_CREATED).json(result);
  } catch (err) {
    console.error(err.message);
    return res
      .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + err.message });
  }
});


const deleteProduct = rescue(async (req, res)  => {
  try {
    const { id } = req.params; 
    await destroyProduct(id);

    return res.status(STATUS_204_NO_CONTENT).end();
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + error.message });
  }

});


const changeProduct = rescue(async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const newProduct = {...body, id };

    const result = await updateProduct(newProduct);    

    return res.status(STATUS_201_CREATED).json(result);
  } catch (error) {
    return res.status(STATUS_400_BAD_REQUEST).json({ message:  'Product does not exist'});
  }
});

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  changeProduct,
};

