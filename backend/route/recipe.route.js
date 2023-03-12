const { Router } = require('express');
const recipeRoute = Router();
const controller = require('../controller/recipe.controller');
recipeRoute.post('/create', controller.createRecipe);



module.exports = recipeRoute;