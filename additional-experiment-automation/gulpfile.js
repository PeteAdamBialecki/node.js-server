var gulp = require('gulp');

gulp.task('copy', function() {
    gulp.src('index.html')
    .pipe(gulp.dest('assets'))
  });


var gutil = require('gulp-util');

gulp.task('log', function() {
    gutil.log('== My Log Task ==')
  });