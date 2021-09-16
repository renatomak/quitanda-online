const AddressModel = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    complement: DataTypes.STRING,
    reference: DataTypes.STRING,
    cep: DataTypes.STRING,
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
  });

  address.associate = (models) => {
    address.belongsTo(models.user,
      { foreignKey: 'user_id', as: 'users' });
  };

  return address;
};

module.exports = AddressModel;
