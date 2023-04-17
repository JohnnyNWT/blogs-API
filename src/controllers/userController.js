const userService = require('../services/userService');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  if (newUser.message) {
    return res.status(newUser.message === 'User already registered' ? 409 : 400)
      .json({ message: newUser.message });
  }
  return res.status(201).json({ token: newUser });
};

const getUsers = async (_req, res) => {
  const getAll = await userService.getUsers();
  return res.status(200).json(getAll);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const getById = await userService.getUserById(id);
  if (getById.message) {
    return res.status(404).json(getById);
  }
  return res.status(200).json(getById);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};