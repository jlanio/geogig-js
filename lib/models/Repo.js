'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _Repo = require('./Repo.actions');

var _Repo2 = _interopRequireDefault(_Repo);

var _Utils = require('../services/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Repo = function () {
  function Repo(params, config) {
    _classCallCheck(this, Repo);

    this._params = params;
    this._config = config;
  }

  _createClass(Repo, [{
    key: 'repos',
    get: function get() {
      var _this = this;

      var find = function find() {
        return (0, _requestPromise2.default)(_this._params.uri).then(function (data) {
          return data.repos.repo[0];
        });
      };
      var findOne = function findOne(filter) {
        return (0, _requestPromise2.default)(_this._params.uri).then(function (data) {
          return new _Repo2.default(data.repos.repo.filter(function (repo) {
            return repo.name === filter.name;
          }));
        });
      };
      return {
        find: find,
        findOne: findOne
      };
    }
  }, {
    key: 'init',
    get: function get() {
      return _Utils2.default.initRepo(this._params, this._config);
    }
  }]);

  return Repo;
}();

exports.default = Repo;