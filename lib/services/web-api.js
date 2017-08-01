'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _webApi = require('../helpers/web-api.helper');

var _webApi2 = _interopRequireDefault(_webApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: 'beginTransaction',
    value: function beginTransaction(x) {
      return x;
    }
  }, {
    key: 'endTransaction',
    value: function endTransaction(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return (0, _webApi2.default)({
        baseRequest: 'endTransaction.json?',
        transactionId: params.transactionId,
        cancel: options.cancel
      });
    }
  }, {
    key: 'Add',
    value: function Add(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return {
        path: path,
        transactionId: transactionId
      };
    }
  }, {
    key: 'Blame',
    value: function Blame(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return {
        commit: commit,
        path: path
      };
    }
  }, {
    key: 'Log',
    value: function Log(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return (0, _requestPromise2.default)((0, _webApi2.default)({ baseRequest: params.Adress + 'log.json?' }, {
        limit: options.limit,
        offset: options.offset,
        path: options.path,
        since: options.since,
        until: options.until,
        sinceTime: options.sinceTime,
        untilTime: options.untilTime,
        page: options.page,
        show: options.show,
        firstParentOnly: options.firstParentOnly,
        countChanges: options.countChanges,
        returnRange: options.returnRange,
        summary: options.summary
      }), { json: true });
    }
  }, {
    key: 'GeopackageImport',
    value: function GeopackageImport(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return (0, _requestPromise2.default)({
        method: 'POST',
        uri: (0, _webApi2.default)({ baseRequest: this._Adress + 'import.json?' }, {
          format: 'gpkg',
          transactionId: params.transactionId,
          root: options.root,
          layer: options.layer,
          interchange: options.interchange,
          add: options.add,
          alter: options.alter,
          forceFeatureType: options.forceFeatureType,
          dest: options.dest,
          fidAttribute: options.fidAttribute,
          authorName: options.authorName,
          authorEmail: options.authorEmail,
          message: options.message
        }),
        formData: {
          fileUpload: {
            value: _fs2.default.createReadStream(params.fileUpload),
            options: { filename: 'imovel.gpkg', contentType: null }
          }
        },
        json: true
      });
    }
  }, {
    key: 'GeopackageExport',
    value: function GeopackageExport(task) {
      console.log(this._Adress + task + '/download');
      return (0, _requestPromise2.default)(this._Adress + task + '/download');
    }
  }]);

  return Api;
}();

exports.default = Api;