var gulp = require('gulp');

gulp.task('default', function () {
  return gulp.src('.vuepress/dist/**/*')
    .pipe(gulp.dest('.'))
});