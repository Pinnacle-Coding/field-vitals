var mongoose = require('mongoose');

mongoose.model('InterestedUser', new mongoose.Schema({
    email: String,
    first_name: String,
    last_name: String
}));
