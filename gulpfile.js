var gulp = require('gulp'),
child = require('child_process'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass'),
prefix = require('gulp-autoprefixer');

// Task for building blog when something changed:
gulp.task('jekyll-build', function() {
  return child.spawn('jekyll', ['build', '--watch', '--incremental'], { stdio: 'inherit' })
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('cssInject', ['sass'], function() {
  return gulp.src('assets/css/main.css')
  .pipe(browserSync.stream());
});

// Compile sass into CSS
gulp.task('sass', function() {
  return gulp
    .src('_sass/main.scss')
    .pipe(sass({
        outputStyle: 'compressed',
        includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(gulp.dest('assets/css'));
});

// Task for serving blog with browserSync + watching scss/html files
gulp.task('watch', function() {
  // Serve files from the root of this project
  browserSync.init({ notify: false, server: { baseDir: '_site/' } });
  // Reloads page when some of the already built files changed:
  gulp.watch(['_sass/*.scss', '_sass/**/*.scss'], function() {
    gulp.start('cssInject');
  });
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['jekyll-build', 'watch']);
