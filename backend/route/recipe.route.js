const { Router } = require('express');
const recipeRoute = Router();
const controller = require('../controller/recipe.controller');
recipeRoute.post('/create', controller.createRecipe);
recipeRoute.get('/details', controller.recipeDetails)
recipeRoute.get('/list', controller.recipeList);

module.exports = recipeRoute;