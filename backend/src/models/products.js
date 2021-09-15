const ProductsModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    type: DataTypes.ENUM('FRUTAS', 'VERDURAS'),
    urlImage: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  Products.associate = (models) => {
    Products.blongs(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  return Products;
};

module.exports = ProductsModel;
