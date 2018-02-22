const {spawn, exec} = require('child_process')

class Utils {

	static promiseProcess(child) {
		child.stdout.setEncoding('utf8');
		return new Promise((resolve, reject) => {
				child.addListener("error", reject);
				child.stdout.on('data', resolve);
		});
	}

	static start (config) {
		let child = spawn(config.bin, ['serve', '--multirepo'], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
	static stop (){
		return exec("taskkill /f /im java.exe", (error, stdout, stderr) => stdout);
	}
	static initRepo (params, config) {
		let child = spawn(config.bin, ['init', params.name], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
	static cloneRepo (params, config) {
		let child = spawn(config.bin, ['clone', params.uri, params.name], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
	static config (params, config) {
		let childName = spawn(config.bin, ['config', '--global', 'user.name', params.user], {cwd: config.cwd, detached: false});
		let childEmail = spawn(config.bin, ['config', '--global', 'user.email', params.email], {cwd: config.cwd, detached: false});
		return Promise.all([this.promiseProcess(childName),this.promiseProcess(childEmail)]);
	}
}

module.exports = Utils
