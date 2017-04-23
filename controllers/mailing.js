var mongoose = require('mongoose');
var InterestedUser = mongoose.model('InterestedUser');

module.exports = {
    addToMailingList: {
        path: '/mailing',
        method: 'POST',
        handler: function(req, done) {
            if (!req.body.email || !req.body.first_name ||  !req.body.last_name) {
                done(true, {
                    message: 'Required information is missing'
                });
                return;
            }
            console.log(req.body);
            User.findOne({
                email: req.body.email
            }).exec(function (err, user) {
                if (err) {
                   done(err, {
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
                        });
                    }
                    else {
                        done(null, {
                            message: 'You have already signed up'
                        });
                    }
                }
            });
        }
    }
};
