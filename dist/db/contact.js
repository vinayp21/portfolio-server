'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var contactSchema = new Schema({
	name: {
		require: true,
		type: String
	},
	emailId: {
		require: true,
		type: String
	},
	phone: {
		type: Number
	},
	message: {
		require: true,
		type: String
	}
});

module.exports = _mongoose2.default.model('contact', contactSchema);