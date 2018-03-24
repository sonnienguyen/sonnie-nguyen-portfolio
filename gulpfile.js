var gulp = require("gulp");
var child = require('child_process');
var browserSync = require("browser-sync").create();

// Task for building blog when something changed:
gulp.task("jekyll-rebuild", function() {
  child.spawn('jekyll', ['build', '--watch', '--incremental'], {stdio: 'inherit'});
  });

// Task for serving blog with Browsersync
gulp.task("serve", function() {
  browserSync.init({ server: { baseDir: "_site/" } });
  // Reloads page when some of the already built files changed:
  gulp.watch("_site/**/*.*").on("change", browserSync.reload);
});

// Default task
gulp.task("default", ["jekyll-rebuild", "serve"]);
