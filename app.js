
global.__base = __dirname + '/';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// MongoDB
var mongoose = require('mongoose');

mongoose.connect(process.env.FV_MONGODB);

require('./models/models.js');

app.set('port', process.env.PORT);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(app.get('port'), function() {
    console.log('Running on port ', app.get('port'));
});
