const productsModel = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    type: DataTypes.ENUM('FRUTAS', 'VERDURAS'),
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return products;
};

module.exports = productsModel;
