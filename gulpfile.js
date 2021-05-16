var
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    svgo = require('gulp-svgo'),
    watch = require('gulp-watch');

var
    sassPath = ['sass/*'],
    scssPath = ['scss/*'],
    jsPath = ['js/*'],
    imgPath = ['i/img/*'],
    svgPath = ['i/svg/*'];

const { src, dest } = require('gulp');

function defaultTask(cb) { cb(); }
function cssyp() {
    return src(ypCssPath)
        .pipe(concat('yp.css'))
        .pipe(cssmin())
        .pipe(dest('css/libs'));
}
function css() {
    return src(scssPath)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(dest('css'));
}
function img() {
    return src(imgPath)
        .pipe(imagemin())
        .pipe(dest('images'));
}
function svg() {
    return src(svgPath)
        .pipe(svgo())
        .pipe(dest('images'));
}
function wcss() {
    src(scssPath)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(dest('css'));
    watch(scssPath, css);
}
exports.default = defaultTask;
exports.css = css;
exports.svg = svg;
exports.img = img;
exports.cssyp = cssyp;
exports.wcss = wcss;