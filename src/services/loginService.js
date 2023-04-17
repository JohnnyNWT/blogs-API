const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const loginUser = async ({ email, password }) => {
  if (!email || !password) {
    return { message: 'Some required fields are missing' };
  }
  const user = await User.findOne({ where: { email } });
  if (!user || user.dataValues.password !== password) {
    return { message: 'Invalid fields' };
  }
  const token = generateToken(user.dataValues);
  return token;
};

module.exports = {
  loginUser,
};