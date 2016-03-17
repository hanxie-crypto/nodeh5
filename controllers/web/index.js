/**
 * 首页控制器
 * @author: wq(robin.wang@yoho.cn)
 * @date: 2015/7/13
 */
var layoutPath = '../layouts/layout';
var userimg = require('../../models/userimg');
var config = require('../../config/qiniu_config.js');
var qiniu = require('qiniu');
var cache = require('../../util/cache');
var moment = require('moment');
var pagecount = 40;

qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;
var imgdomain = 'http://img01.yohoboys.com/';
var uptoken = new qiniu.rs.PutPolicy(config.Bucket_Name);

exports.index = function(req, res, next) {
    res.render('pages/index', {
        title: '首页',
        layout: layoutPath
    });
};


