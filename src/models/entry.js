const mongoose = require('../lib/mongo.js');

var phonebookSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    country: String
});

const Phonebook = mongoose.model('phonebook', phonebookSchema);
module.exports = Phonebook;