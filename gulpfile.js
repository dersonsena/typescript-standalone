var gulp = require('gulp');
var gulpBrowserify = require('gulp-browserify-typescript');
var tsConfig = require('./tsConfig.json');
 
gulp.task('gulp-browserify', done => {
    gulpBrowserify({
        watch: true,
        sourcemaps: tsConfig.compilerOptions.sourceMap,
        minify : false,
        src : ['./src/main.ts'],
        outputPath : './dist/',
        outputFile : 'bundle.js',
        tsify : tsConfig.compilerOptions
    }).on('end', done);
});

gulp.task('default', ['gulp-browserify']);

gulp.watch('./src/*', ['gulp-browserify']);