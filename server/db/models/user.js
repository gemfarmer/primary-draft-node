'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Pick);
    // User.hasMany(models.Pool);
    User.belongsToMany(models.Pool, {
      through: models.UserPool,
      as: 'Pool',
      foreignKey: 'userId'
    });
  };

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });

    // if (!user) {
    //   user = await User.findOne({
    //     where: { email: login },
    //   });
    // }

    return user;
  };

  return User;
};

// https://stackoverflow.com/questions/52636776/sequelize-user-m2m-group-find-users-that-are-in-groups