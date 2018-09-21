const gulp = require('gulp');
const inject = require('gulp-inject');

gulp.task('sass--theme-import', function () {
    const theme = process.env.THEME;
    const targetFiles = gulp.src(['./src/**/*.scss', '!./src/theme*.scss'], {base: "./"});
    const source = gulp.src([`./src/${theme}.scss`], {read: false});
    return targetFiles
        .pipe(inject(source, {
            relative: true,
            transform: function (filepath) {
                return '@import \'' + filepath + '\';';
            }
        }))
        .pipe(gulp.dest('./'));
});
