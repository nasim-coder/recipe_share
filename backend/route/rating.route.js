const { Router } = require('express');
const ratingRoute = Router();
const controller = require('../controller/rating.controller')

ratingRoute.post('/create', controller.createRating);
ratingRoute.get('/list', controller.ratingList);
ratingRoute.get('/details', controller.ratingDetails);


module.exports = ratingRoute;