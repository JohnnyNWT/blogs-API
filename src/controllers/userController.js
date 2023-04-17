const userService = require('../services/userService');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  if (newUser.message) {
    return res.status(newUser.message === 'User already registered' ? 409 : 400)
    .json({ message: newUser.message });
  }
  return res.status(201).json({ token: newUser });
};

module.exports = {
  createUser,
};