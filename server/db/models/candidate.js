'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    seed: DataTypes.INTEGER,
    odds: DataTypes.INTEGER
  }, {});
  Candidate.associate = function(models) {
    Candidate.hasMany(models.Pick);
  };
  return Candidate;
};