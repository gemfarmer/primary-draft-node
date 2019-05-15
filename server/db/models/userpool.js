'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPool = sequelize.define('UserPool', {
    role: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    poolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pool',
        key: 'id'
      }
    }
  }, {});
  UserPool.associate = function(models) {
    // associations can be defined here
  };
  return UserPool;
};