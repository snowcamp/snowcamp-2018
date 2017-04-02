const gulp = require('gulp');
const bower = require('gulp-bower');

/**
 * @name dependencies:build
 * @task resolve the bower dependencies.
 */
gulp.task('dependencies:build', () => {
  bower();
});


