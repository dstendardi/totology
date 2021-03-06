
// Gulpfile.js 
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , inject = require('gulp-inject')
  , merge = require('merge2')
  , sass = require('gulp-sass')
  , browserify = require('browserify')
  , babelify = require("babelify")
  , source = require('vinyl-source-stream');

var config = {
  directories: {
    build: './client/.build',
    css: './client/scss',
    js: './client/js'
  },
  apps: [
    './client/js/Main.js'
  ],
  vendors: [
    'bower_components/react/react.js'
  ]
};

var css = function cssPipepline() {

  return gulp.src(config.directories.css + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.directories.build + '/css'));
};

var js = function jsPipeline() {

  var vendors = gulp.src(config.vendors)
    .pipe(gulp.dest(config.directories.build + '/vendors/'));

  var app = browserify({
    entries: config.apps,
    paths: [config.directories.js],
    insertGlobals: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(config.directories.build + '/js'));

  return merge(vendors, app);
};



gulp.task('build:client', function () {
  var target = './client/index.html';
  var sources = merge(css(), js());

  return gulp.src(target)
    .pipe(inject(sources, {read: false, ignorePath: '/client/.build'}))
    .pipe(gulp.dest(config.directories.build));
});

gulp.task('dev', ['build:client'], function () {

  gulp.watch([
    "./client/**/*",
    "!./client/.build"
  ], ['build:client']);

  nodemon({
    script: './server/main.js',
    watch: ['./server'],
    ext: 'js'
  });
});

