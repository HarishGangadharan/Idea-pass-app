const gulp = require('gulp');
const inject = require('gulp-inject');


// RUN: gulp theme --option 1|2|3
gulp.task('theme', function () {
  const theme = `theme${process.argv[4]}`;
  const targetFiles = gulp.src(['./src/**/*.scss', '!./src/_theme*.scss', '!./src/themeConstants.scss'], {
    base: "./"
  });
  const source = gulp.src([`./src/_${theme}.scss`], {
    read: false
  });
  return targetFiles
    .pipe(inject(source, {
      relative: true,
      transform: function (filepath) {
        return '@import \'' + filepath + '\';';
      }
    }))
    .pipe(gulp.dest('./'));
});
