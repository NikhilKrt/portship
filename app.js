var express 		= require('express');
var bodyParser 		= require('body-parser');

var app 			= express();
var port 			= process.env.PORT || 3000;
var mongoose 		= require('mongoose');
var mongoDb 		= '';

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});

const api		= require('./api/api');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(api);

mongoose.set('useFindAndModify', false);

app.listen(port, () => console.log(`App listening on port ${port}!`));