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

const getPostById = async (id) => {
  const getById = await BlogPost.findAll({ where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    console.log(getById);
  if (getById.length === 0) {
    return { message: 'Post does not exist' };
  }
  return getById[0];
};

// const result = getAll.map(({ dataValues }) => ({ ...dataValues }));
module.exports = {
  getAllPosts,
  getPostById,
};
