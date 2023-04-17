const loginService = require('../services/loginService');

const loginUser = async (req, res) => {
  const userLogin = await loginService.loginUser(req.body);
  if (userLogin.message) {
    return res.status(400).json({ message: userLogin.message });
  }
  return res.status(200).json({ token: userLogin });
};

module.exports = {
  loginUser,
};