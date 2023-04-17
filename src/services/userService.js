const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const createUser = async ({ displayName, email, password, image }) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g;
  const validateEmail = emailRegex.test(email);
  const findEmail = await User.findOne({ where: { email } });

  if (displayName.length < 8) {
    return { message: '"displayName" length must be at least 8 characters long' };
  }
  if (!validateEmail) {
    return { message: '"email" must be a valid email' };
  }
  if (password.length < 6) {
    return { message: '"password" length must be at least 6 characters long' };
  }
  if (findEmail) {
    return { message: 'User already registered' };
  }
  const create = await User.create({ displayName, email, password, image });
  const token = generateToken(create.dataValues);
  return token;
};

const getUsers = async () => {
  const getAll = await User.findAll({ attributes: { exclude: ['password'] } });
  const result = getAll.map(({ dataValues }) => ({ ...dataValues }));
  return result;
};

const getUserById = async (id) => {
  const getById = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!getById) {
    return { message: 'User does not exist' };
  }
  return getById.dataValues;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};