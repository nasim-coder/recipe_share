const express = require('express');
const app = express();
require('./config/dbconfig')()
const allRoute = require('./route/index');
require('dotenv').config()
const PORT = process.env.PORT;
console.log(PORT);
app.use('/', allRoute);
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.listen(PORT, () => console.log('server is running'));