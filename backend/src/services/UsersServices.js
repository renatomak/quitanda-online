const { user } = require('../models');
const { messageError } = require('../util');

const findAllUsers = async () => {
  try {
    const result = await user.findAll();
    return result;
  } catch (error) {
    throw Error(error.message + messageError('buscar Usuários'));
  }
};

const findUserByPk = async (id) => {
  try {
    const result = await user.findByPk(id);

    return { result };
  } catch (error) {
    throw Error(error.message + messageError('buscar Usuários por ID'));
  }
};

const createUser = async (client) => {
  try {
    const newUser = await user.create(client);

    return newUser;
  } catch (error) {
    throw Error(error.message + messageError('cadastrar Usuários'));
  }
};

const updateUser = async (client) => {
  try {
    const { id, name, homePhone, cellPhone, email, cpf, birthDate, password } =
    client;
    await user.update(
      { name, homePhone, cellPhone, email, cpf, birthDate, password },
      { where: { id } }
    );
    const result = await findUserByPk(id);

    return result;
  } catch (error) {
    throw Error(error.message + messageError('atualizar o Usuários'));
  }
};

const destroyUser = async (id) => {
  try {
    await user.destroy({ where: { id } });
    return true;
  } catch (error) {
    throw Error(error.message + messageError('deletar o Usuários'));
  }
};

module.exports = {
  findAllUsers,
  findUserByPk,
  createUser,
  updateUser,
  destroyUser,
};
