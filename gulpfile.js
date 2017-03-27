var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('compile-ts', function() {
	var tsResult = gulp.src('./src/**/*.ts')
		.pipe(tsProject());

	return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('compress', function() {
	return gulp.src('./dist/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compile-ts']);

gulp.watch('./src/*', ['compile-ts']);
gulp.watch('./dist/*', ['compress']);