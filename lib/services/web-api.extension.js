'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rp = require('request-promise');
var Actions = require('../models/Repo.actions');
var api = require('./web-api');

var ApiExtension = function () {
  function ApiExtension(params) {
    _classCallCheck(this, ApiExtension);

    this._params = params;
  }

  _createClass(ApiExtension, [{
    key: 'repo',
    get: function get() {
      var _this = this;

      var find = function find() {
        return rp(_this._params.uri + '/repos', { json: true }).then(function (data) {
          return data.repos.repo[0];
        });
      };
      var findOne = function findOne(filter) {
        return rp(_this._params.uri + '/repos', { json: true }).then(function (data) {
          var filterRepo = data.repos.repo.filter(function (repo) {
            return repo.name === filter.name;
          });
          if (!Array.isArray(filterRepo) || !filterRepo.length) {
            throw 'The repository ' + filter.name + ' is not exist';
          } else {
            return new Actions(filterRepo);
          }
        });
      };
      return {
        find: find,
        findOne: findOne
      };
    }
  }, {
    key: 'tasks',
    get: function get() {
      var _this2 = this;

      console.log(this._params.uri + '/tasks');
      var find = function find() {
        return rp(_this2._params.uri + '/tasks', { json: true });
      };
      var findOne = function findOne(tasksID) {
        return rp(_this2._params.uri + '/tasks/' + tasksID, { json: true });
      };
      return {
        find: find,
        findOne: findOne
      };
    }
  }]);

  return ApiExtension;
}();

module.exports = ApiExtension;