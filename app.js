/**
 * 启动项
 * @type {[type]}
 */
var express = require('express');
var config = require('./config/global_config');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var superagent = require('superagent');
var hbs = require('hbs');
var hbshelper = require('./hbshelper');
var fs = require('fs');
var web_routers = require('./routes/web/web_routes');

var session = require('express-session');


var RedisStore = require('connect-redis')(session);

var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

for (var hbname in hbshelper) { //handlerbar helper用法
  hbs.registerHelper(hbname, hbshelper[hbname]);
}

hbs.registerPartials(__dirname + '/views/partials');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//日志
/*var accesslogpath = config.accesslogpath || (__dirname + '/access.log');
var errlogpath = config.errlogpath || (__dirname + '/error.log');
var accessLogStream = fs.createWriteStream(accesslogpath, {
  flags: 'a'
});
var errorLogStream = fs.createWriteStream(errlogpath, {
  flags: 'a'
})
app.use(logger('dev'));
app.use(logger('tiny', {
  stream: accessLogStream
}))
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(session({
  secret: config.session_secret,
  store: new RedisStore({
    port: config.redis_port,
    host: config.redis_host
  }),
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.locals.imgpath = config.imgpath; //设计预加载的图片路径
app.locals.loadingpath = config.loadingpath; //设置加载动画图片的路径
app.locals.jspath = config.jspath; //js路径
app.locals.csspath = config.csspath; //css路径
app.use("/", web_routers); //路由

app.get('/local/*', function(req, res) {
  var originurl = req.originalUrl;
  originurl = originurl.substr('/local/'.length);
  superagent
    .get(originurl)
    .end(function(err, response) {
      if (err) {} else {
        res.send(response.body);
      }
    });
})

// 404页面处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('nopage', {
    message: '您访问的页面不存在',
    error: {}
  });
});


/**
 * 异常捕获
 * @param  {[type]} err   [description]
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {String} next) {             var meta [description]
 * @return {[type]}       [description]
 */
app.use(function(err, req, res, next) {
  var meta = '[' + new Date() + '] ' + req.url + '\n';
  console.log(err.message);
  //errorLogStream.write(meta + err + '\n');
  res.status(err.status || 500);
  if (err.async === true) {
    res.send({
      error: err.info,
      message: err.message
    });
  } else {
    res.render('error', {
      message: err.message
    });
  }

  return;
});
if (!module.parent) {
  app.listen(config.listenport);
  console.log("server start at" + config.listenport)
}

module.exports = app;