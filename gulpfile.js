// Gulpfile.js 
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , inject = require('gulp-inject');

gulp.task('inject', function () {
  var target = gulp.src('./client/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./client/src/**/*.js', './client/resources/**/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./client/.build/'));

});

gulp.task('dev', function () {
  nodemon({ script: 'server/server.js'
    , ext: 'html js css'
    , ignore: [
      'node_modules/**',
      'bower_components/**',
      '.vagrant/**'
    ]
    , tasks: ['inject']
    });
});