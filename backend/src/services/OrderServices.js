const { order } = require('../models');
const { messageError } = require('../util');

const findAllOrders = async () => {
  try {
    const result = await order.findAll();
    return result;
  } catch (error) {
    throw Error(error.message + messageError('buscao Pedido'));
  }
};

const findOrderByPk = async (id) => {
  try {
    const result = await order.findAll({ where: { id }});

    return { result };
  } catch (error) {
    throw Error(error.message + messageError('buscao Pedido por ID'));
  }
};

const createOrder = async (client) => {
  try {
    const newOrder = await order.create(client);

    return newOrder;
  } catch (error) {
    throw Error(error.message + messageError('cadastrao Pedido'));
  }
};

const updateOrder = async (client) => {
  try {
    const { id, quantity, user_id, product_id } =
    client;
    await order.update(
      { quantity },
      { where: { id, user_id, product_id } }
    );
    const result = await findOrderByPk(id);
      console.log(result)
    return result;
  } catch (error) {
    throw Error(error.message + messageError('atualizar o Pedido'));
  }
};

const destroyOrder = async (id) => {
  try {
    await order.destroy({ where: { id } });
    return true;
  } catch (error) {
    throw Error(error.message + messageError('deletar o Pedido'));
  }
};

module.exports = {
  findAllOrders,
  findOrderByPk,
  createOrder,
  updateOrder,
  destroyOrder,
};
