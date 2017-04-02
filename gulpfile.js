/**
 * gulpfile.js
 * @task - loads all tasks from `./internals/gulp/tasks/*`
 */
const argv = require('yargs').boolean('prod').argv;
const glob = require('glob');
const gutil = require('gulp-util');
const path = require('path');

const isProduction = argv.prod;

gutil.log(gutil.colors.bold('====> I am not a frontend ninja !'));

if (isProduction) {
  gutil.log(gutil.colors.bold.green('Running in Production Mode'));
} else {
  gutil.log(gutil.colors.bold.green('Running in Development Mode'));
}

glob.sync('./gulp/tasks/*.js').forEach((file) => {
  require(path.resolve(file)); // eslint-disable-line
});
