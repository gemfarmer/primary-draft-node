'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pick = sequelize.define('Pick', {
    seed: DataTypes.INTEGER
  }, {});
  Pick.associate = function(models) {
    Pick.belongsTo(models.User);
    Pick.belongsTo(models.Pool);
    Pick.belongsTo(models.Candidate);
  };
  return Pick;
};