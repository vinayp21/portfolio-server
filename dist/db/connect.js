"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbConnector = {
  connect: function connect() {
    _mongoose["default"].Promise = global.Promise;

    _mongoose["default"].connect(_config["default"].dbName, {
      useNewUrlParser: true
    }, function (err, db) {
      if (err) {
        throw new Error(err);
      }

      console.log("connected to  db ".concat(db));
    });
  }
};
module.exports = dbConnector;