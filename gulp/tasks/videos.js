var gulp              = require('gulp'),
    paths             = require('../config').paths;

gulp.task('videos', function() {
  gulp.src(paths.src.videos + "/**/*")
    .pipe(gulp.dest(paths.dist.videos));
});