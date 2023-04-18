const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  const getAll = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return getAll;
};

// const result = getAll.map(({ dataValues }) => ({ ...dataValues }));
module.exports = {
  getAllPosts,
};
