// // Gulp.js configuration
var browserify = require("browserify");
var babelify = require("babelify");
// var
//   // modules
//   gulp = require('gulp'),
//   // folders
//   folder = {
//     src: 'src/',
//     build: 'public/'
//   }
// ;
//
// gulp.task('es6-compile', function() {
//   browserify({ debug: true })
//   .transform(babelify.configure({ presets: ["es2015","react", "stage-0"] }))
//   .require("./src/index.js", { entry: true })
//   .bundle()
//   .pipe(gulp.dest('./public/dest/javascripts'));
// });

var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('default', function () {
  browserify({ debug: true })
  .transform(babelify.configure({ presets: ["es2015","react", "stage-0"] }))
  .require("src/index.js", { entry: true });
  return gulp.src('src/**/*.js')
       .pipe(babel().on('error', function(e){
            console.log(e);
         }))
       .pipe(gulp.dest('public'));
});
