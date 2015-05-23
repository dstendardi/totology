// Gulpfile.js 
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , inject = require('gulp-inject')
  , merge = require('merge2')
  , sass = require('gulp-sass');


var css = function cssPipepline() {
  
  var src  = './client/scss/**/*.scss';
  var destination = './client/.build/css';

  return gulp.src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(destination));
};

var js = function jsPipeline() {
   
  var src = './client/js/**/*.js';

  return gulp.src(src);
};

gulp.task('build:client', function () {
  
  var target = './client/index.html';
  var destination = './client/.build/';

  var sources = merge(css(), js());

  return gulp.src(target)
    .pipe(inject(sources))
    .pipe(gulp.dest(destination));
});

gulp.task('dev', function () {
  nodemon({ 
      script: './server/main.js', 
      ext: 'scss html js',
      ignore: [
        'node_modules/**',
        'bower_components/**',
        '.vagrant/**'
    ]
    , tasks: ['build:client']
    });
});
