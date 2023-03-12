const { Router } = require('express');
const categoryRoute = Router();
const controller = require('../controller/category.controller')

categoryRoute.post('/create', controller.createCategory);
categoryRoute.get('/list', controller.categoryList);

module.exports = categoryRoute;