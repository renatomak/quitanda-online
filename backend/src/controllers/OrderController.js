const rescue = require('express-rescue');

const {
  findAllOrders,
  findOrderByPk,
  createOrder,
  updateOrder,
  destroyOrder,
} = require('../services');

const {
  STATUS_201_CREATED,
  STATUS_400_BAD_REQUEST,
  STATUS_200_OK,
  STATUS_204_NO_CONTENT,
} = require("../util");



const getOrders = rescue(async (_req, res) => {
  try {
    const result = await findAllOrders();

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(STATUS_400_BAD_REQUEST).json({ message: 'Bad request' });
  }
});

const getOrderById = rescue(async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findOrderByPk(id);

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields " + error.message });
  }
});

const addOrder = rescue(async (req, res) => {
  try {
    const { body } = req;

    const result = await createOrder(body);

    return res.status(STATUS_201_CREATED).json(result);
  } catch (err) {
    console.error(err.message);
    return res
      .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + err.message });
  }
});


const deleteOrder = rescue(async (req, res)  => {
  try {
    const { id } = req.params; 
    await destroyOrder(id);

    return res.status(STATUS_204_NO_CONTENT).end();
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + error.message });
  }

});


const changeOrder = rescue(async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const newOrder = {...body, id };

    const result = await updateOrder(newOrder);    

    return res.status(STATUS_201_CREATED).json(result);
  } catch (error) {
    return res.status(STATUS_400_BAD_REQUEST).json({ message:  'Order does not exist'});
  }
});

module.exports = {
  getOrders,
  getOrderById,
  addOrder,
  deleteOrder,
  changeOrder,
};

