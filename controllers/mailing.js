var mongoose = require('mongoose');
var InterestedUser = mongoose.model('InterestedUser');

module.exports = {
    getMailingList: {
        path: '/mailing',
        method: 'GET',
        handler: function (req, done) {
            InterestedUser.find().exec(function (err, users) {
                if (err) {
                    done(true, {
                        state: 'error',
                        message: err.message
                    });
                }
                else {
                    done(null, {
                        state: 'success',
                        message: 'Mailing list retrieved successfully',
                        users: users
                    });
                }
            });
        }
    },
    addToMailingList: {
        path: '/mailing',
        method: 'POST',
        handler: function (req, done) {
            if (!req.body.email || !req.body.first_name || !req.body.last_name) {
                done(null, {
                    state: 'error',
                    message: 'Required information is missing'
                });
                return;
            }
            InterestedUser.findOne({
                email: req.body.email
            }).exec(function (err, user) {
                if (err) {
                    done(err, {
                        message: err.message
                    });
                } else {
                    if (!user) {
                        var user = new InterestedUser({
                            email: req.body.email,
                            first_name: req.body.first_name,
                            last_name: req.body.last_name
                        });
                        user.save(function (err, user) {
                            done(null, {
                                state: 'success',
                                message: 'Thank you for signing up!'
                            });
                        });
                    } else {
                        done(null, {
                            state: 'error',
                            message: 'You have already signed up'
                        });
                    }
                }
            });
        }
    }
};