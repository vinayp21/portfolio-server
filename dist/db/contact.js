"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
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
module.exports = _mongoose["default"].model('contact', contactSchema);