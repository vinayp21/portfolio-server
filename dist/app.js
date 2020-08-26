"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _connect = _interopRequireDefault(require("./db/connect"));

var _contact = _interopRequireDefault(require("./db/contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_connect["default"].connect();

app.use(_express["default"]["static"]('public'));
app.use(_bodyParser["default"].json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); // Request methods you wish to allow

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request headers you wish to allow

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization'); // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)

  res.setHeader('Access-Control-Allow-Credentials', true); // Pass to next layer of middleware

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

  _contact["default"].create(contactInfo, function (err, data) {
    if (err) {
      throw new Error(err);
    }

    res.json(data);
  });
});
app.get('/getMessage', function (req, res) {
  _contact["default"].find({}, function (err, data) {
    if (err) {
      throw new Error(err);
    }

    res.json(data);
  });
});
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log(" app listening on port ".concat(PORT));
});