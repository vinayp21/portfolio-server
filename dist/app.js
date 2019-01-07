'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _connect = require('./db/connect');

var _connect2 = _interopRequireDefault(_connect);

var _contact = require('./db/contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
_connect2.default.connect();

app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());

app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.get('/', function (req, res) {
	res.send('Welcome To Node App');
});

app.post('/sendMessage', function (req, res) {
	var _req$body = req.body,
	    name = _req$body.name,
	    emailId = _req$body.emailId,
	    message = _req$body.message,
	    phone = _req$body.phone;


	var contactInfo = {
		name: name,
		emailId: emailId,
		message: message,
		phone: phone
	};

	_contact2.default.create(contactInfo, function (err, data) {
		if (err) {
			throw new Error(err);
		}
		res.json(data);
	});
});

app.get('/getMessage', function (req, res) {
	_contact2.default.find({}, function (err, data) {
		if (err) {
			throw new Error(err);
		}
		res.json(data);
	});
});

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
	console.log(' app listening on port ' + PORT);
});