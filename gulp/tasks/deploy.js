var gulp    = require('gulp'),
    ghPages = require ('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*').pipe(ghPages({
    remoteUrl: "git@github.com:foundryhair/foundryhair-site.git"
  }));
});
