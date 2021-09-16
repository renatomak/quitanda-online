const rescue = require('express-rescue');

const {
  findAllAddress,
  findAddressByPk,
  createAddress,
  updateAddress,
  destroyAddress,
} = require('../services');

const {
  STATUS_201_CREATED,
  STATUS_400_BAD_REQUEST,
  STATUS_200_OK,
  STATUS_204_NO_CONTENT,
} = require("../util");



const getAddress = rescue(async (_req, res) => {
  try {
    const result = await findAllAddress();

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(STATUS_400_BAD_REQUEST).json({ message: 'Bad request' });
  }
});

const getAddressById = rescue(async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findAddressByPk(id);

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields " + error.message });
  }
});

const addAddress = rescue(async (req, res) => {
  try {
    const { body } = req;

    const result = await createAddress(body);

    return res.status(STATUS_201_CREATED).json(result);
  } catch (err) {
    console.error(err.message);
    return res
      .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + err.message });
  }
});


const deleteAddress = rescue(async (req, res)  => {
  try {
    const { id } = req.params; 
    await destroyAddress(id);

    return res.status(STATUS_204_NO_CONTENT).end();
  } catch (error) {
    return res
    .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" + error.message });
  }

});


const changeAddress = rescue(async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const newAddress = {...body, id };

    const result = await updateAddress(newAddress);    

    return res.status(STATUS_201_CREATED).json(result);
  } catch (error) {
    return res.status(STATUS_400_BAD_REQUEST).json({ message:  'Address does not exist'});
  }
});

module.exports = {
  getAddress,
  getAddressById,
  addAddress,
  deleteAddress,
  changeAddress,
};

