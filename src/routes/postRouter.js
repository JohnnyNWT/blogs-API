const { Router } = require('express');
const postController = require('../controllers/postController');
const validateToken = require('../middleware/validateToken');

const postRouter = Router();

postRouter.get('/', validateToken, postController.getAllPosts);
postRouter.get('/:id', validateToken, postController.getPostById);

module.exports = postRouter;