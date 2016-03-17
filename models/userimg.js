/**
 * 用户图片管理实体
 * @type {[type]}
 */
var mysql = require('../db/mysqlDriver');
var message = require('../config/message');
var userimg = require('../config/sql');
/**
 * 添加用户图片
 * @param  {[type]}   params   [description]
 * @param  {Function} callback [description]
 * @param  {Function} next     [description]
 * @return {[type]}            [description]
 */
exports.adduserimg = function(params, callback) {
    mysql.query(userimg.adduserimg, params, function(err, data) {
        if (err) {
            err.async = true; //是否异步发送
            err.info = message.ADD_FAIL;
            callback(err, null);
        } else {
            var rep = {};
            rep.status = true;
            callback(null, rep);
        }
    })
}

/**
 * 查询用户图片
 * @param  {[type]}   params   [description]
 * @param  {Function} callback [description]
 * @param  {Function} next     [description]
 * @return {[type]}            [description]
 */
exports.finduserimg = function(params, callback) {
    mysql.query(userimg.finduserimg + ';' + userimg.GET_DADA_TOTALS, params, function(err, data) {
        if (err) {
            err.async = false; //是否异步发送
            err.info = message.ADD_FAIL;
            callback(err, null);
        } else {
            var rep = {};
            rep.status = true;
            rep.data = data[0];
            rep.total = data[1][0].total;
            callback(null, rep);
        }
    })
}