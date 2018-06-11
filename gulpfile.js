var gulp = require('gulp');
var cleanCss = require('gulp-clean-css'); // 压缩css
var uglify = require('gulp-uglify'); // 压缩js
var scss = require('gulp-sass'); // 编译scss

// 编译scss
gulp.task('scss', function() {
    gulp.src('src/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('src/css'));
})