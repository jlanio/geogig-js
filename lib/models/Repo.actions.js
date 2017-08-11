'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var api = require('../services/web-api');

var Actions = function () {
  function Actions(repo) {
    var _this = this;

    _classCallCheck(this, Actions);

    this._repo = repo[0];
    this._Adress = this._repo.href.replace('.json', '/');
    this.joinParams = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.assign({ Adress: _this._Adress }, params);
    };
  }

  _createClass(Actions, [{
    key: 'log',
    value: function log(options) {
      return api.Log(this.joinParams(), options);
    }
  }, {
    key: 'export',
    value: function _export(params, options) {
      return api.Export(this.joinParams(params));
    }
  }, {
    key: 'endTransaction',
    value: function endTransaction(params, options) {
      return api.endTransaction(this.joinParams(params), options);
    }
  }, {
    key: 'geopackage',
    get: function get() {
      var _this2 = this;

      return {
        import: function _import(params) {
          return api.Import(_this2.joinParams(params));
        },
        export: function _export(params) {
          return api.Export(_this2.joinParams(params));
        }
      };
    }
  }, {
    key: 'beginTransaction',
    get: function get() {
      return api.beginTransaction(this.joinParams());
    }
  }]);

  return Actions;
}();

module.exports = Actions;