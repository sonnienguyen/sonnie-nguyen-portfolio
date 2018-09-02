const gulp = require('gulp');
const child = require('child_process');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const webpack = require('webpack');

// task for building blog when something changed
gulp.task('jekyll-build', done => {
  child
    .spawn('bundle', ['exec', 'jekyll', 'build', '--config', './docs/_config.yml', '--incremental'], {
      stdio: 'inherit',
    })
    .on('close', done);
});

// rebuild site and reload Browsersync
gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
  browserSync.reload();
});

// compile SASS files into CSS and auto-inject into browsers
gulp.task('cssInject', ['sass'], () => {
  gulp.src('docs/assets/css/main.css').pipe(browserSync.stream());
});

// compile SASS files into CSS
gulp.task('sass', () => {
  gulp
    .src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules'],
      onError: browserSync.notify,
    }).on('error', sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(gulp.dest('docs/assets/css'));
});

// scripts
gulp.task('scripts', callback => {
  webpack(require('../webpack.config.js'), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString({ colors: true }));
    callback();
  });
});

// task for serving blog with Browsersync
gulp.task('watch', () => {
  // serve files from the root of this project
  browserSync.init({ notify: false, server: { baseDir: '_site/' } });
  // keep watching for any changes in HTML, CSS and JS files
  // reloads page when some of the already built files changed
  gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], () => {
    gulp.start('cssInject');
  });
  gulp.watch('src/js/**/*.js', ['scripts', 'jekyll-rebuild']);
  gulp.watch(
    [
      'docs/*.html',
      'docs/_categories/*',
      'docs/_includes/*.html',
      'docs/_layouts/*.html',
      'docs/_pages/*.html',
      'docs/_posts/*',
      'docs/_posts/**/*',
    ],
    ['jekyll-rebuild'],
  );
});

// default task
gulp.task('default', ['watch']);
