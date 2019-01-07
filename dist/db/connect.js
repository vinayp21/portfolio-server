'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbConnector = {
	connect: function connect() {
		_mongoose2.default.Promise = global.Promise;
		_mongoose2.default.connect(_config2.default.dbName, {
			uri_decode_auth: true
		}, function (err, db) {
			if (err) {
				throw new Error(err);
			}
			console.log('connected to  db ' + db);
		});
	}
};

module.exports = dbConnector;