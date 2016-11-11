var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var rename = require('gulp-rename'); 
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify'); 


gulp.task('move',function(){
	gulp.src(['src/*.html'])
	.pipe(gulp.dest('dist'))
})

gulp.task('moveimg', function () {
	gulp.src(['src/img/*'])
	.pipe(gulp.dest('dist/img'))
})

gulp.task('less2css',function(){
	gulp.src('src/less/style.less')
	.pipe(less())
	.pipe(gulp.dest('dist/css'))
	.pipe(rename({suffix:'.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css'))
})
gulp.task('concat',function(){
	gulp.src('src/js/main.js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
})


gulp.task('watch',['move','moveimg','less2css','concat'],function(){
	gulp.watch(['src/*.html','src/less/style.less','src/js/main.js'],['move','moveimg','less2css','concat'])
})