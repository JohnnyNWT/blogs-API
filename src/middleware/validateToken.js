const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(authorization, secretKey);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = validateToken;