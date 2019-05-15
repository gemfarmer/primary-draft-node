'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pool = sequelize.define('Pool', {
    name: DataTypes.STRING
  }, {});
  Pool.associate = function(models) {
    // Pool.belongsToMany(models.User, { through: UserPool });
    Pool.belongsToMany(models.User, {
      through: models.UserPool,
      as: 'User',
      foreignKey: 'poolId'
    });
  };
  return Pool;
};