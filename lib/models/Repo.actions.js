'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webApi = require('../services/web-api');

var _webApi2 = _interopRequireDefault(_webApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Actions(repo) {
    _classCallCheck(this, Actions);

    this._repo = repo[0];
    this._Adress = this._repo.href.replace('.json', '/');
  }

  _createClass(Actions, [{
    key: 'log',
    value: function log(options) {
      return _webApi2.default.Log({ Adress: this._Adress }, options);
    }
  }, {
    key: 'endTransaction',
    value: function endTransaction(params, options) {
      return rp('' + this._Adress + _webApi2.default.endTransaction(params, options), { json: true });
    }
  }, {
    key: 'geopackage',
    get: function get() {
      return {
        import: _webApi2.default.GeopackageImport.bind(this),
        export: _webApi2.default.GeopackageExport.bind(this)
      };
    }
  }, {
    key: 'beginTransaction',
    get: function get() {
      return rp(this._Adress + 'beginTransaction.json', { json: true }).then(function (e) {
        return JSON.parse(e).response;
      });
    }
  }]);

  return Actions;
}();