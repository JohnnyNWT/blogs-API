const { Router } = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../middleware/validateToken');

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', validateToken, userController.getUsers);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;