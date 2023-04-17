const categorieService = require('../services/categoriesService');

const getAllCategories = async (_req, res) => {
  const getAll = await categorieService.getAllCategories();
  return res.status(200).json(getAll);
};

module.exports = {
  getAllCategories,
};