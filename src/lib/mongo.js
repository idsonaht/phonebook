const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);// 'mongodb://mongo:27017'

module.exports = mongoose;
