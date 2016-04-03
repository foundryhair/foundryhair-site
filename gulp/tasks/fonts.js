var gulp              = require('gulp'),
    paths             = require('../config').paths;

gulp.task('fonts', function() {
  gulp.src(paths.src.fonts + "/*")
    .pipe(gulp.dest(paths.dist.fonts));
});
