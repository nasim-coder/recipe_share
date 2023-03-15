const { Router } = require('express');
const userRoute = Router();
const controller = require('../controller/user.controller');

userRoute.post('/create', controller.createUser);

module.exports = userRoute;