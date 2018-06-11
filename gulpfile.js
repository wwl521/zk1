var gulp = require('gulp');
var cleanCss = require('gulp-clean-css'); // 压缩css
var uglify = require('gulp-uglify'); // 压缩js
var scss = require('gulp-sass'); // 编译scss
var server = require('gulp-webserver'); // 搭建服务
var data = require('./src/data/data.json'); // 数据
var babel = require('gulp-babel');

var fs = require('fs');
var path = require('path');
var url = require('url');
// 编译scss 压缩
gulp.task('scss', function() {
    gulp.src('src/scss/*.scss')
        .pipe(scss())
        .pipe(cleanCss())
        .pipe(gulp.dest('src/css'));
});

// 监听scss
// gulp.task('watch', function() {
//     gulp.watch('src/scss/style.scss', ['scss']);
// });

// 压缩js 文件
gulp.task('uglify', function() {
    gulp.src('src/js/libs/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/js2'));
});

// 启动服务
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8090,
            livereveload: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return false;
                }
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/api/data') {
                    res.end(JSON.stringify(data));
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
});
gulp.task('default', ['scss', 'uglify', 'server']);