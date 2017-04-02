const argv = require('yargs').boolean('prod').argv;
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cfg = require('../config').html;


/**
 * Production Mode
 * if set, the site will be rendered without drafts and with the production URL set in `hugo/config.yaml`
 * @type {Boolean}
 */
const isProduction = argv.prod;

/**
 * @name html:build
 * @task in production mode, minify the HTML
 */
gulp.task('html:build', () => {
  if (isProduction) {
    return gulp.src(cfg.sourcePath)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(cfg.destinationPath));
  }
});


