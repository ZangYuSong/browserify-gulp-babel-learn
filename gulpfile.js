var gulp = require("gulp"),
  browserify = require("browserify"),
  source = require("vinyl-source-stream"),
  buffer = require("vinyl-buffer"),
  babelify = require("babelify");
  $ = require("gulp-load-plugins")();

gulp.task("build-js", function() {
  return browserify({
    entries: "./src/app.js"
  })
    .transform(babelify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe($.uglify())
    .pipe(gulp.dest("dist/"));
});
