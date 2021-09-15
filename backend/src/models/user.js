const defineUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    homePhone: DataTypes.STRING,
    cellPhone: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    password: DataTypes.STRING,    
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Address,
      { foreignKey: 'userId', as: 'addresses' });
  };

  return User;
};

module.exports = defineUserModel;