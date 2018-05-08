const gulp = require('gulp');
const child = require('child_process');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const webpack = require('webpack');

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

// Task for building blog when something changed
gulp.task('jekyll-build', done => {
  child.spawn(jekyll, ['build', '--incremental'], { stdio: 'inherit' }).on('close', done);
});

// Rebuild Jekyll and reload browserSync
gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
  browserSync.reload();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('cssInject', ['sass'], () => {
  gulp.src('assets/css/main.css').pipe(browserSync.stream());
});

// Compile sass into CSS
gulp.task('sass', () => {
  gulp
    .src('_sass/main.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules'],
      onError: browserSync.notify,
    }).on('error', sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(gulp.dest('assets/css'));
});

// Scripts
gulp.task('scripts', callback => {
  webpack(require('./webpack.config.js'), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

// Task for serving blog with browserSync + watching scss/html files
gulp.task('watch', () => {
  // Serve files from the root of this project
  browserSync.init({ notify: false, server: { baseDir: '_site/' } });
  // Reloads page when some of the already built files changed
  gulp.watch(['_sass/*.scss', '_sass/**/*.scss'], () => {
    gulp.start('cssInject');
  });
  gulp.watch('src/js/**/*.js', ['scripts', 'jekyll-rebuild']);
  gulp.watch(
    [
      '*.html',
      '_categories/*',
      '_includes/*.html',
      '_layouts/*.html',
      '_pages/*.html',
      '_posts/*',
      '_posts/**/*',
    ],
    ['jekyll-rebuild'],
  );
});

// Default task
gulp.task('default', ['watch']);
