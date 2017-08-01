'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _Utils = require('../services/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Repo = require('./Repo');

var _Repo2 = _interopRequireDefault(_Repo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Serve = function () {
  function Serve(config) {
    _classCallCheck(this, Serve);

    this._config = config;
  }

  _createClass(Serve, [{
    key: 'serveInit',
    value: function serveInit() {
      return _Utils2.default.start(this._config);
    }
  }, {
    key: 'serveStop',
    value: function serveStop() {
      return _Utils2.default.stop(this._config);
    }
  }, {
    key: 'connect',
    value: function connect(uriAdress) {
      return new _Repo2.default(Object.assign({}, uriAdress, { json: true }));
    }
  }]);

  return Serve;
}();

exports.default = Serve;