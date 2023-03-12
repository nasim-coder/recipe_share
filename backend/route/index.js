const { Router } = require('express');
const allroute = Router();
const userRoute = require('./user.route');
const reciperoute = require('./recipe.route');
const ratingRoute = require('./rating.route');

allroute.use('/user', userRoute);
allroute.use('/recipe', reciperoute);
allroute.use('/rating', ratingRoute);

module.exports = allroute;



