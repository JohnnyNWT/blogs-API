module.exports = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  PostCategorieTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategorieTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })

    Category.belongsToMany(BlogPost, {
      as: 'post',
      through: PostCategorieTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
  }
  return PostCategorieTable;
};