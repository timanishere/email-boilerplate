//------------------- DEPENDENCIES -------------------//
var gulp 					= require('gulp');
var browserSync 			= require('browser-sync');
var fileinclude 			= require('gulp-file-include');
var rename 					= require('gulp-rename');
var prettify 				= require('gulp-html-prettify');
//------------------- DEPENDENCIES -------------------//




///////////////////////////////////////
// 	FILE INCLUDER
/////////////////////////////////////// 
gulp.task('fileinclude', function() {
  gulp.src(['./src/temp-index.html'])
	.pipe(fileinclude({
	  prefix: '@@',
	  basepath: './src/partials'
	}))
	.pipe(rename("index.html"))
	.pipe(prettify({indent_char: ' ', indent_size: 2}))
	.pipe(gulp.dest('./src'));
});


///////////////////////////////////////
// BROWSER SYNC
///////////////////////////////////////
gulp.task('serve', function() {
	browserSync.init({
		server: "./src"
	});
	gulp.watch('./src/*.html').on('change', browserSync.reload);
});


///////////////////////////////////////
// WATCH FOR CHANGES
///////////////////////////////////////
gulp.task('watch', function() {
	gulp.watch('./src/temp-index.html', ['fileinclude']);
	gulp.watch('./src/partials/*.html', ['fileinclude']);
});


///////////////////////////////////////
// GULP DEFAULT
///////////////////////////////////////
gulp.task('default', ['fileinclude', 'serve', 'watch']);

