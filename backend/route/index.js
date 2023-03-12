const { Router } = require('express');
const allroute = Router();
const userRoute = require('./user.route');
const reciperoute = require('./recipe.route');
const ratingRoute = require('./rating.route');
const categoryRoute = require('./category.route');

allroute.use('/user', userRoute);
allroute.use('/recipe', reciperoute);
allroute.use('/rating', ratingRoute);
allroute.use('/category', categoryRoute);

module.exports = allroute;



