var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config');

gulp.task('webpack', function() {
  return gulp.src('./src/js/app.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('./public/js/'));
});