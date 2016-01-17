var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  browserSync.init({
    files: ["**/*"],
    timestamps: true,
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
});

gulp.task('default', ['browser-sync']);
