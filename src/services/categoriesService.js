const { Category } = require('../models');

const getAllCategories = async () => {
  const getAll = await Category.findAll();
  const result = getAll.map(({ dataValues }) => ({ ...dataValues }));
  return result;
};

module.exports = {
  getAllCategories,
};
