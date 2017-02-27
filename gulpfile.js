var gulp = require("gulp");
var ts = require("gulp-typescript");
var webpack = require('webpack-stream');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
    return gulp.src('./src/main.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});