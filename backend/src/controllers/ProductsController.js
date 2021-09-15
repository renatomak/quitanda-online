const rescue = require('express-rescue');

const { getAllProducts } = require('../services');
const {
  STATUS_400_BAD_REQUEST,
  STATUS_200_OK,
} = require('../util');

const getProducts = rescue(async (_req, res) => {
  try {
    const result = await getAllProducts();

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(STATUS_400_BAD_REQUEST).json({ message: 'Bad request' });
  }
});

module.exports = {
  getProducts,
};
