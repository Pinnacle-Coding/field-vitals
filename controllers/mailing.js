var mongoose = require('mongoose');
var InterestedUser = mongoose.model('InterestedUser');

module.exports = {
    addToMailingList: {
        path: '/mailing',
        method: 'POST',
        handler: function(req, done) {
            User.findOne({
                email: req.body.email
            }).exec(function (err, user) {
                if (err) {
                   done(true, {
                       message: err.message
                   });
                }
                else {
                    if (!user) {
                        var user = new InterestedUser({
                            email: req.body.email,
                            first_name: req.body.first_name,
                            last_name: req.body.last_name
                        });
                        user.save(function (err, user) {
                            done(null, {
                                message: 'Thank you for signing up!'
                            });
                        })
                    }
                    else {
                        done(null, {
                            message: 'You have already signed up!'
                        })
                    }
                }
            });
        }
    }
};
