module.exports = (sequelize) => {
  const Order = sequelize.define('Order',
    {},
    { timestamps: false });

  Order.associate = (models) => {
    models.Products.belongsToMany(models.User, {
      as: 'users',
      through: Order,
      foreignKey: 'products_id',
      otherKey: 'userId',
    });
    models.User.belongsToMany(models.Products, {
      as: 'products',
      through: Order,
      foreignKey: 'userId',
      otherKey: 'products_id',
    });
  };

  return Order;
};