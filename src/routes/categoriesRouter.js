const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const validateToken = require('../middleware/validateToken');

const categorieRouter = Router();

categorieRouter.get('/', validateToken, categoriesController.getAllCategories);

module.exports = categorieRouter;