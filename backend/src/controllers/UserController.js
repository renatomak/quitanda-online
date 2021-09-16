const rescue = require('express-rescue');

const {
  findAllUsers,
  findUserByPk,
  createUser,
  updateUser,
  destroyUser,
} = require('../services');

const {
  STATUS_201_CREATED,
  STATUS_400_BAD_REQUEST,
  STATUS_200_OK,
  STATUS_204_NO_CONTENT,
} = require("../util");



const getUsers = rescue(async (_req, res) => {
  try {
    const result = await findAllUsers();

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(STATUS_400_BAD_REQUEST).json({ message: 'Bad request' });
  }
});

const getUserById = rescue(async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findUserByPk(id);

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields " + error.message });
  }
});

const addUser = rescue(async (req, res) => {
  try {
    const { body } = req;

    const result = await createUser(body);

    return res.status(STATUS_201_CREATED).json(result);
  } catch (err) {
    console.error(err.message);
    return res
      .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + err.message });
  }
});


const deleteUser = rescue(async (req, res)  => {
  try {
    const { id } = req.params; 
    await destroyUser(id);

    return res.status(STATUS_204_NO_CONTENT).end();
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + error.message });
  }

});


const changeUser = rescue(async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const newUser = {...body, id };

    const result = await updateUser(newUser);    

    return res.status(STATUS_201_CREATED).json(result);
  } catch (error) {
    return res.status(STATUS_400_BAD_REQUEST).json({ message:  'User does not exist'});
  }
});

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  changeUser,
};

