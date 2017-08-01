'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Serve = require('./Serve');

var _Serve2 = _interopRequireDefault(_Serve);

var _Repo = require('./Repo');

var _Repo2 = _interopRequireDefault(_Repo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geogig = function () {
  function Geogig(config) {
    _classCallCheck(this, Geogig);

    this._serve = new _Serve2.default(config);
    this._config = config;
  }

  _createClass(Geogig, [{
    key: 'repo',
    value: function repo(params) {
      var repo = new _Repo2.default(params, this._config);
      return {
        init: repo.init
      };
    }
  }, {
    key: 'serve',
    get: function get() {
      return {
        init: this._serve.serveInit.bind(this._serve),
        stop: this._serve.serveStop.bind(this._serve),
        connect: this._serve.connect
      };
    }
  }]);

  return Geogig;
}();

exports.default = Geogig;