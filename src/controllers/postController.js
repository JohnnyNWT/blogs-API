const postService = require('../services/postService');

const getAllPosts = async (_req, res) => {
  const getAll = await postService.getAllPosts();
  return res.status(200).json(getAll);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const getById = await postService.getPostById(id);
  if (getById.message) {
    return res.status(404).json(getById);
  }
  return res.status(200).json(getById);
};

module.exports = {
  getAllPosts,
  getPostById,
};