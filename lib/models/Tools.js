'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('../services/Utils');
var ApiExtension = require('../services/web-api.extension');

var Tools = function () {
  function Tools(params, config) {
    _classCallCheck(this, Tools);

    this._params = params;
    this._config = config;
    this._ApiExtension = new ApiExtension(params);
  }

  _createClass(Tools, [{
    key: '_apiEx',
    get: function get() {
      return this._ApiExtension;
    }
  }, {
    key: 'repos',
    get: function get() {
      var _this = this;

      var find = function find() {
        return _this._apiEx.repo.find();
      };
      var findOne = function findOne(filter) {
        return _this._apiEx.repo.findOne(filter);
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

      var find = function find() {
        return _this2._apiEx.tasks.find();
      };
      var findOne = function findOne(filter) {
        return _this2._apiEx.tasks.findOne(filter);
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

  return Tools;
}();

module.exports = Tools;