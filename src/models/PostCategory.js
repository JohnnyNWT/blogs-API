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
      as: 'postCategoriePostId',
      through: PostCategorieTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })

    Category.belongsToMany(BlogPost, {
      as: 'postCategorieCategoryId',
      through: PostCategorieTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  }
  return PostCategorieTable;
};