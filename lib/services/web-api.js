'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');
var rp = require('request-promise');
var refactoringGET = require('../helpers/web-api.helper');

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: 'beginTransaction',
    value: function beginTransaction(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'beginTransaction.json?' }, {}), { json: true });
    }
  }, {
    key: 'endTransaction',
    value: function endTransaction(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'endTransaction.json?' }, {
        transactionId: params.transactionId,
        cancel: options.cancel
      }), { json: true });
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

      return rp(refactoringGET({ baseRequest: params.Adress + 'log.json?' }, {
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
    key: 'Import',
    value: function Import(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp({
        method: 'POST',
        uri: refactoringGET({ baseRequest: params.Adress + 'import.json?' }, {
          format: params.format,
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
            value: fs.createReadStream(params.fileUpload),
            options: { filename: 'imovel.gpkg', contentType: 'application/octet-stream;type=geopackage' }
          }
        },
        json: true
      });
    }
  }, {
    key: 'Export',
    value: function Export(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'export.json?' }, {
        format: params.format,
        path: options.path,
        bbox: options.bbox,
        interchange: options.interchange
      }), { json: true });
    }
  }]);

  return Api;
}();

module.exports = Api;