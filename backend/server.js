const express = require('express');
const app = express();
require('./config/dbconfig')()
const allRoute = require('./route/index');
require('dotenv').config()
const morgan = require('morgan')
const PORT = process.env.PORT;
console.log(PORT);
app.use(morgan('tiny'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', allRoute);
app.listen(PORT, () => console.log(`server is running on ${PORT}`));