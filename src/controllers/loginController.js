const loginService = require('../services/loginService');

const createUser = async (req, res) => {
  const newUser = await loginService.createUser(req.body);
  if (newUser.message) {
    return res.status(400).json({ message: newUser.message });
  }
  return res.status(200).json({ token: newUser });
};

module.exports = {
  createUser,
};