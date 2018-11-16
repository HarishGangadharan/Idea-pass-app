const gulp = require('gulp');
const inject = require('gulp-inject');
const zip = require('gulp-zip');

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


// RUN: gulp zip --option ${plugin-name}
gulp.task('zip', function () {
  return gulp.src(`./plugins/${process.argv[4]}/**`)
      .pipe(zip(`${process.argv[4]}.zip`))
      .pipe(gulp.dest('./plugins'));
});
