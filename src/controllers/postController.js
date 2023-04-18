const postService = require('../services/postService');

const getAllPosts = async (_req, res) => {
  const getAll = await postService.getAllPosts();
  return res.status(200).json(getAll);
};

module.exports = {
  getAllPosts,
};