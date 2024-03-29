const gulp = require('gulp');
const inject = require('gulp-inject');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const wait = require('gulp-wait');
const sass = require('gulp-sass');
const typedoc = require("gulp-typedoc");

// RUN: gulp theme --option theme1|2|3
gulp.task('change-theme', function () {
  const theme = process.argv[4];
  const targetFiles = gulp.src(['./src/_theme.scss'], {
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
    .pipe(gulp.dest('./'))
});

// RUN: gulp css --option theme1|2|3
gulp.task('css', () => {
  let sassStream;
  const theme = process.argv[4];
  sassStream = gulp.src(['./src/**/*.scss', '!./src/_theme*.scss', '!./src/themeConstants.scss'], {
    base: "./"
  })
  return sassStream
    .pipe(wait(3000))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(`build/static/css/${theme}/`))
});

gulp.task('typedoc', function() {
  return gulp
      .src(["./src/**/*.ts"])
      .pipe(typedoc({
          module: "commonjs",
          ignoreCompilerErrors: true,
          jsx: "preserve",
          target: "es6",
          out: "./frontend-doc",
          name: "Idea Paas"
      }))
  ;
});

// RUN: gulp default --option theme1|2|3
gulp.task('default', gulp.series('change-theme', 'css'));
