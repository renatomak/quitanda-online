const sequelizePaginate = require('sequelize-paginate')

const productsModel = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(15, 2),
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    type: DataTypes.ENUM('FRUTAS', 'VERDURAS'),
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  sequelizePaginate.paginate(products);

  return products;
};

module.exports = productsModel;
