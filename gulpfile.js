var gulp = require('gulp');
var webpackConfig = require('./webpack.config.js');
var webpackStream = require('webpack-stream');

gulp.task('build', function(){
  return gulp.src('./src/app.ts')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('www/js'))
});