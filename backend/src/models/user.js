const defineUserModel = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
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

  user.associate = (models) => {
    user.hasMany(models.Address,
      { foreignKey: 'userId', as: 'addresses' });
  };

  return user;
};

module.exports = defineUserModel;