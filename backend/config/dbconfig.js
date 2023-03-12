const mongoose = require('mongoose');
require('dotenv').config()
const URL = 'mongodb://' + process.env.HOST + '/' + process.env.DATABASE;
async function connectDb() {
    let connection;
    try {
        connection = await mongoose.connect(URL);
        // connection = await mongoose.connect('mongodb://0.0.0.0:27017/recipeshare');
        console.log('connected to database');
    } catch (err) {
        console.log('error connecting db');
        return new Error(err)
    }
    
    return connection
}


module.exports = connectDb;