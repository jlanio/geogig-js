'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('../services/Utils');
var ApiExtension = require('../services/web-api.extension');

var Repo = function () {
  function Repo(params, config) {
    _classCallCheck(this, Repo);

    this._params = params;
    this._config = config;
    this._ApiExtension = new ApiExtension(params);
  }

  _createClass(Repo, [{
    key: 'repos',
    get: function get() {
      var action = this._ApiExtension;

      var find = function find() {
        return action.repo.find();
      };
      var findOne = function findOne(filter) {
        return action.repo.findOne(filter);
      };
      return {
        find: find,
        findOne: findOne
      };
    }
  }, {
    key: 'tasks',
    get: function get() {
      var action = this._ApiExtension;

      var find = function find() {
        return action.tasks.find();
      };
      var findOne = function findOne(filter) {
        return action.tasks.findOne(filter);
      };
      return {
        find: find,
        findOne: findOne
      };
    }
  }, {
    key: 'init',
    get: function get() {
      return Utils.initRepo(this._params, this._config);
    }
  }]);

  return Repo;
}();

module.exports = Repo;