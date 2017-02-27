var gulp = require("gulp");
var webpack = require('webpack-stream');
var run = require('gulp-run');

gulp.task("build", function() {
    return gulp.src('./src/main.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function() {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('run', function() {
    return run('npm start').exec();
});