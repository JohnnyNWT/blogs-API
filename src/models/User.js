module.exports = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  })

  usersTable.associate = ({ BlogPost }) => {
    usersTable.hasMany(BlogPost, {
      foreignKey: 'id',
      as: 'userId'
    })
  }
  return usersTable;
};