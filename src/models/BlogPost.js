module.exports = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    })

    BlogPostsTable.associate = ({ User }) => {
      BlogPostsTable.belongsTo(User, {
        foreignKey: 'userId',
        as: 'blogPostUserId'
      })
    }
    return BlogPostsTable;
  };