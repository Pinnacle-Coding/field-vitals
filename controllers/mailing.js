var mongoose = require('mongoose');

module.exports = {
    addToMailingList: {
        path: '/mailing',
        method: 'POST',
        handler: function(req, done) {
            console.log(req.body);
        }
    }
};
