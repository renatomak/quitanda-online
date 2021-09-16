module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order',
    { quantity: DataTypes.INTEGER },
    { timestamps: false });

  order.associate = (models) => {
    models.products.belongsToMany(models.user, {
      as: 'users',
      through: order,
      foreignKey: 'product_id',
      otherKey: 'user_id',
    });
    models.user.belongsToMany(models.products, {
      as: 'products',
      through: order,
      foreignKey: 'user_id',
      otherKey: 'product_id',
    });
  };

  return order;
};