var mongoose = require('mongoose');
var async = require('async');
var client = require(require('path').join(__base, 'app-s3.js'));
var PackCtrl = require(require('path').join(__base, 'controllers/packs.js'));
var Author = mongoose.model('Author');
var s3 = require('s3');

module.exports = {
    addToMailingList: {
        path: '/mailing',
        method: 'POST',
        handler: function(req, done) {
            console.log(req.body);
        }
    }
};
