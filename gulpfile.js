/**
 * GULP ENTRY
 * author: wq(aitongbian123@163.com)
 * date: 2015/6/29
 */

var gulp = require('gulp'),
    cp = require('child_process'),
    fs = require('fs'),
    server = require('gulp-develop-server');

var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var precss = require('precss');
var ftp = require('gulp-ftp');
gutil = require('gulp-util');
var config = JSON.parse(fs.readFileSync('./package.json').toString());

var rootDist = 'dist/' + config.name + '/';
var ftpConfig = {
    host: '218.94.75.58',
    user: 'php',
    pass: 'yoho9646'
};
var distDir = {
    js: rootDist + config.version + '/js',
    css: rootDist + config.version + '/css',
    img: rootDist + 'assets/img',
    font: rootDist + 'assets/font',
    hypesource: rootDist + config.hypesource + '/'
};

gulp.task('default', ['postcss-dev', 'postcss-watch', 'server', 'server:restart']);

// start express server
gulp.task('server', function() {
    server.listen({
        path: 'app.js'
    });
});

// restart server if app.js changed
gulp.task('server:restart', function() {
    gulp.watch(['app.js', 'controllers/wap/*.js', 'public/js/data.js'], server.restart);
});



//根据环境变量生成postcss插件配置
function postcssEnvPlugin(env) {
    var sprites = {
            spritesmith: {
                padding: 2
            },
            groupBy: function(file) {

                // 根据目录分组，防止合并后的图片太大
                var group = file.url.split('/')[1];

                return group ? Promise.resolve(group) : Promise.reject();
            },
            filterBy: function(file) {

                //使用resolve转化后静态资源生成../img或者../assets/img/的路径
                if (/\/img/.test(file.url)) {
                    return Promise.reject();
                }
                return Promise.resolve();
            }
        },
        assets;

    if (env === 'DEV') {
        assets = {
            loadPaths: ['public/font/', 'public/img/'],
            relativeTo: 'public/css/'
        };

        Object.assign(sprites, {
            basePath: './public/img',
            stylesheetPath: './public/css',
            spritePath: './public/img'
        });
    } else if (env === 'PRO') {
        assets = {
            loadPaths: [distDir.img, distDir.font],
            relativeTo: distDir.css
        };

        Object.assign(sprites, {
            basePath: distDir.img,
            stylesheetPath: distDir.css,
            spritePath: distDir.img
        });
    }

    return [
        precss,
        require('postcss-px2rem')({
            remUnit: 40
        }),
        require('autoprefixer'),
        require('postcss-assets')(assets),
        /*require('postcss-sprites').default(sprites),*/
        require('postcss-calc'),
        require('postcss-opacity'),

        //可选
        require('postcss-use')({
            modules: ['postcss-clearfix', 'postcss-crip', 'postcss-short', 'postcss-center', 'postcss-position']
        })
    ];
}


//Postcss开发环境
gulp.task('postcss-dev', function() {
    return gulp.src('public/sass/index.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(postcssEnvPlugin('DEV')))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('postcss-watch', function() {
    gulp.watch('public/sass/**/*.css', ['postcss-dev']);
});

//Postcss正式环境生成
gulp.task('postcss-pro', ['assets'], function() {
    return gulp.src('public/sass/index.css')
        .pipe(postcss(postcssEnvPlugin('PRO')))
        .pipe(cssnano())
        .pipe(gulp.dest(distDir.css))
});
//font+img->dist/assets
gulp.task('assets', function() {
    gulp.src('public/img/**')
        .pipe(gulp.dest(distDir.img));
    gulp.src('public/font/*')
        .pipe(gulp.dest(distDir.font));
});


var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var minimgpath = 'public/' + config.hypesource;//'dist/yohodesiner/assets/img/gdmf'//
gulp.task('imgmin', function() {
    return gulp.src(minimgpath + '/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(minimgpath + '/'));
});

gulp.task('hype', function() {
    return gulp.src('public/yohogdmf.hyperesources/*.*')
        .pipe(gulp.dest(distDir.hypesource));
});

gulp.task('js', function() {
    return gulp.src('public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(distDir.js));
});

gulp.task('dist', function() {
    var ftpstream = ftp(ftpConfig);
    return gulp.src('dist/**/')
        .pipe(ftpstream)
        .pipe(gutil.noop());
});