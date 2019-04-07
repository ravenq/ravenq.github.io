var gulp = require('gulp');

gulp.task('default', function () {
  gulp.src('.vuepress/dist/assets/**/*')
    .pipe(gulp.dest('./assets/'));
  gulp.src('.vuepress/dist/404.html')
    .pipe(gulp.dest('./'));
  gulp.src('.vuepress/dist/index.html')
    .pipe(gulp.dest('./'));
  return gulp.src('.vuepress/dist/blog.md/**/*')
    .pipe(gulp.dest('./blog.md.html/'));
});