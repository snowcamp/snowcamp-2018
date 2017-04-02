const argv = require('yargs').boolean('prod').argv;
const exec = require('child_process').exec;
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const cfg = require('../config').hugo;

/**
 * @name hugo:build
 * @task builds the site via Hugo
 */

/**
 * Destination Path
 * @type {String}
 */
const dest = path.join(process.cwd(), cfg.destinationPath);

/**
 * Source Path
 * @type {String}
 */
const src = process.cwd();

/**
 * Production Mode
 * if set, the site will be rendered without drafts and with the production URL set in `hugo/config.yaml`
 * @type {Boolean}
 */
const isProduction = argv.prod;

/**
 * DevMode Config
 * @type {String}
 */
const devOpts = !isProduction ? `--buildDrafts=true --baseUrl="${cfg.devHost}:${cfg.port}/"` : '';

/**
 * Command that will be executed by `exec()`
 * @type {String}
 */
const command = `hugo --config=config.toml -s ${src} -d ${dest} ${devOpts}`;

gulp.task('hugo:build', done =>
  exec(command, (err, stdout) => {
    console.log(gutil.colors.blue(command));
    gutil.log(gutil.colors.yellow(stdout));
    if (!! err) {
      gutil.log(gutil.colors.red(err));
    }
    done();
  })
);
