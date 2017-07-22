const { spawn, exec } = require('child_process');

module.exports = class Utils {

	static promiseProcess(child) {
		child.stdout.setEncoding('utf8');
		return new Promise((resolve, reject) => {
				child.addListener("error", reject);
				child.stdout.on('data', resolve);
		});
	}

	static start (config) {
		var child = spawn(config.bin, ['serve', '--multirepo'], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
	static stop (){
		return exec("taskkill /f /im java.exe", (error, stdout, stderr) => stdout);
	}
	static initRepo (options, config) {
		var child = spawn(config.bin, ['init', options.name], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
}
