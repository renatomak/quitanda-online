module.exports = (sequelize) => {
  const Order = sequelize.define('Order',
    {},
    { timestamps: false });

  Order.associate = (models) => {
    models.Products.belongsToMany(models.User, {
      as: 'users',
      through: Order,
      foreignKey: 'product_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Products, {
      as: 'products',
      through: Order,
      foreignKey: 'user_id',
      otherKey: 'product_id',
    });
  };

  return Order;
};