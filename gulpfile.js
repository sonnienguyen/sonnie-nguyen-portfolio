var gulp = require('gulp'),
child = require('child_process'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass'),
prefix = require('gulp-autoprefixer');

// Task for building blog when something changed:
gulp.task('jekyll-rebuild', function() {
  child.spawn('jekyll', ['build', '--watch', '--incremental'], {stdio: 'inherit'});
  });

// Compile files
gulp.task('sass', function () {
  return gulp.src('_sass/main.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(prefix())
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('_site/assets/css'))
  .pipe(gulp.dest('assets/css'));
});

// Task for serving blog with Browsersync
gulp.task('watch', function() {
  browserSync.init({ notify: false, server: { baseDir: '_site/' } });
  // Reloads page when some of the already built files changed:
  gulp.watch(['_sass/*.scss', '_sass/**/*.scss'], ['sass']);
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['jekyll-rebuild', 'watch']);
