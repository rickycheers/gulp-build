var gulp    = require('gulp'),
	wiredep = require('wiredep'),
	inject  = require('gulp-inject'),
	watch   = require('gulp-watch');

gulp.task('default', function () {

	wiredep({
	    src: './index.html',
	    directory: './bower_components/',
	    bowerJson: require('./bower.json')
	  });

	var target = gulp.src('./index.html');
	var sources = gulp.src(
		[
			'./app/**/*.js',
			'normalize.min.css',
			'./app/**/*.css'
		], 
		{
			read: false
		}
	); 
	target.pipe(inject(sources, {relative: 1})).pipe(gulp.dest('./'));

});