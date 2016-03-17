/**
 * 获取本机ip
 * @return {[type]} [description]
 */
function getIPAdress() {
	var interfaces = require('os').networkInterfaces();
	for (var devName in interfaces) {
		var iface = interfaces[devName];
		for (var i = 0; i < iface.length; i++) {
			var alias = iface[i];
			if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
				return alias.address;
			}
		}
	}
}
var ENV = 'DEV';
var listenport = 8222;
var sourcebaseurl = 'http://cdn.yoho.cn/yohodesiner/1.0.2/';
var assetsbaseurl = 'http://cdn.yoho.cn/yohodesiner/assets/';
if (ENV === 'DEV') {
	sourcebaseurl = 'http://' + getIPAdress() + ':'+listenport+'/';
	assetsbaseurl = 'http://' + getIPAdress() + ':'+listenport+'/';
}
var config = {

	basepicpath: 'public/',

	mysql: {
		host: '127.0.0.1',
		port: '3306',
		database: 'yohodesiner',
		charset: 'utf8_general_ci',
		user: 'root',
		password: 'ww3ww3',
		multipleStatements: true
	},
	mongo: {
		db: 'mongodb://127.0.0.1/wqdb'
	},
	listenport: listenport,
	redis_db: 0,
	redis_host: '127.0.0.1',
	redis_port: 6379,
	session_secret: 'yohodd',
	auth_cookie_name: 'yohodd',
	imgpath: assetsbaseurl + 'img/',
	loadingpath: assetsbaseurl+'img/loading/',
	jspath: sourcebaseurl + 'js/',
	csspath: sourcebaseurl + 'css/',
	accesslogpath: '/Data/logs/pm2/access.log',
	errlogpath: '/Data/logs/pm2/error.log'
}
module.exports = config;
