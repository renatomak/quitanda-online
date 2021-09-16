const { address } = require('../models');
const { messageError } = require('../util');

const findAllAddress = async () => {
  try {
    const result = await address.findAll();
    return result;
  } catch (error) {
    throw Error(error.message + messageError('buscar Endereços'));
  }
};

const findAddressByPk = async (id) => {
  try {
    const result = await address.findByPk(id);

    return { result };
  } catch (error) {
    throw Error(error.message + messageError('buscar Endereço por ID'));
  }
};

const createAddress = async (client) => {
  try {
    const newAddress = await address.create(client);

    return newAddress;
  } catch (error) {
    throw Error(error.message + messageError('cadastrar Endereço'));
  }
};

const updateAddress = async (client) => {
  try {
    const {
      id,
      state,
      city,
      district,
      street,
      number,
      complement,
      reference,
      cep,
    } = client;
    await address.update(
      { state, city, district, street, number, complement, reference, cep },
      { where: { id } }
    );
    const result = await findAddressByPk(id);

    return result;
  } catch (error) {
    throw Error(error.message + messageError('atualizar o Endereço'));
  }
};

const destroyAddress = async (id) => {
  try {
    await address.destroy({ where: { id } });
    return true;
  } catch (error) {
    throw Error(error.message + messageError('deletar o Endereço'));
  }
};

module.exports = {
  findAllAddress,
  findAddressByPk,
  createAddress,
  updateAddress,
  destroyAddress,
};
