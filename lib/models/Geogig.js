'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Serve = require('./Serve');
var Tools = require('./Tools');

var Geogig = function () {
  function Geogig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { bin: null, cwd: null };

    _classCallCheck(this, Geogig);

    this._serve = new Serve(config);
  }

  _createClass(Geogig, [{
    key: 'repo',
    value: function repo(params) {
      var config = this._serve._config;
      var repo = new Tools(params, config);

      return {
        init: repo.init
      };
    }
  }, {
    key: 'serve',
    get: function get() {
      var serve = this._serve;

      return {
        init: serve.serveInit.bind(serve),
        stop: serve.serveStop.bind(serve),
        connect: serve.connect
      };
    }
  }]);

  return Geogig;
}();

module.exports = Geogig;