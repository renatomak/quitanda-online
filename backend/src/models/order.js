module.exports = (sequelize) => {
  const Order = sequelize.define('Order',
    {},
    { timestamps: false });

  Order.associate = (models) => {
    models.products.belongsToMany(models.User, {
      as: 'users',
      through: Order,
      foreignKey: 'product_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.products, {
      as: 'products',
      through: Order,
      foreignKey: 'user_id',
      otherKey: 'product_id',
    });
  };

  return Order;
};