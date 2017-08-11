'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('../services/Utils');
var Tools = require('./Tools');

var Serve = function () {
  function Serve() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { uri: null };

    _classCallCheck(this, Serve);

    this._config = config;
  }

  _createClass(Serve, [{
    key: 'serveInit',
    value: function serveInit() {
      return Utils.start(this._config);
    }
  }, {
    key: 'serveStop',
    value: function serveStop() {
      return Utils.stop(this._config);
    }
  }, {
    key: 'connect',
    value: function connect() {
      var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { uri: null };

      return new Tools(uri);
    }
  }]);

  return Serve;
}();

module.exports = Serve;