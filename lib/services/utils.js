'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require('child_process'),
    spawn = _require.spawn,
    exec = _require.exec;

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'promiseProcess',
		value: function promiseProcess(child) {
			child.stdout.setEncoding('utf8');
			return new Promise(function (resolve, reject) {
				child.addListener("error", reject);
				child.stdout.on('data', resolve);
			});
		}
	}, {
		key: 'start',
		value: function start(config) {
			var child = spawn(config.bin, ['serve', '--multirepo'], { cwd: config.cwd, detached: false });
			return this.promiseProcess(child);
		}
	}, {
		key: 'stop',
		value: function stop() {
			return exec("taskkill /f /im java.exe", function (error, stdout, stderr) {
				return stdout;
			});
		}
	}, {
		key: 'initRepo',
		value: function initRepo(rapams, config) {
			var child = spawn(config.bin, ['init', rapams.name], { cwd: config.cwd, detached: false });
			return this.promiseProcess(child);
		}
	}]);

	return Utils;
}();

module.exports = Utils;