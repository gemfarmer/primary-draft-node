const pool = (sequelize, DataTypes) => {
  const Pool = sequelize.define('pool', {
    name: {
      type: DataTypes.STRING
    },
  });

  Pool.associate = models => {
    Pool.hasMany(models.User);
  };

  return Pool;
};

export default pool;