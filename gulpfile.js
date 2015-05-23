// Gulpfile.js 
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , inject = require('gulp-inject')
  , babel = require('gulp-babel')
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

  var vendors = gulp.src([
   'bower_components/react/react.js'
  ]).pipe(gulp.dest('./client/.build/vendors/'));
   
  var app = gulp.src('./client/js/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('./client/.build/app/'));

  return merge(vendors, app);
};

gulp.task('build:client', function () {
  
  var target = './client/index.html';
  var destination = './client/.build/';

  var sources = merge(css(), js());

  return gulp.src(target)
    .pipe(inject(sources, {read: false, ignorePath: '/client/.build'}))
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
