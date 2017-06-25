/**
 * config.js
 * @exports {Object} - Configuration for Gulp Tasks
 */
const BrowserSync = require('browser-sync');

/**
 * Sets the target path for the build
 * @type {String}
 */
const output = 'public';

/**
 * Sets the target path for static assets (scripts, styles, images, svg)
 * @type {String}
 */
const assetPath = `${output}`;

/**
 * Sets the static sources
 * @type {String}
 */
const srcPath = 'static';

/**
 * Host that BrowserSync serves from
 * @type {String}
 */
const host = 'localhost';

/**
 * Port that BrowserSync serves from
 * @type {Number}
 */
const port = process.env.PORT || 6789;

/**
 * BrowserSync Config
 * `options` will be passed to BrowserSync instance
 * task: `tasks/watch.js` (other tasks may use browserSync instance)
 * @type {Object}
 */
const browserSync = {
  instance: BrowserSync.create(),
  settings: {
    files: false,
    host,
    notify: false,
    port,
    server: {
      baseDir: output,
    },
  },
};

/**
 * Copy Config
 * each bundle should be set up as an object with `sourcePath` & `destinationPath`. Globbing supported
 * task: `tasks/copy.js`
 * @type {Object}
 */
const copy = {
  // each bundle is an object consisting of source-glob and destination-path
  bundles: [
    {
      sourcePath: `${srcPath}/fonts/*.{ttf,woff,woff2}`,
      destinationPath: `${assetPath}/fonts`,
    },
    {
      sourcePath: `${srcPath}/libs/**/*`,
      destinationPath: `${assetPath}/libs`
    },
    {
      sourcePath: `${srcPath}/past/**/*`,
      destinationPath: `${assetPath}/past`
    },
    {
      sourcePath: `${srcPath}/*.*`,
      destinationPath: assetPath,
    },
  ],
};

/**
 * Hugo Config
 * Task: `tasks/hugo.js`
 * @type {Object}
 */
const hugo = {
  devHost: `http://${host}`,
  destinationPath : output,
  sourcePath: '.',
  port: port,
  watch: ['content/**', 'data/**', 'config.yaml', `layouts/**/*.html`]
};

/**
 * Images Config
 * `options` will be passed to imagemin
 * Task: `tasks/images.js`
 * @type {Object}
 */
const images = {
  sourcePath: `${srcPath}/img/**/*.{jpg,jpeg,png,gif}`,
  destinationPath: `${assetPath}/img`,
  settings: {
    progressive: true,
  },
};

/**
 * HTML Config
 * `options` will be passed to htmlmin
 * Task: `tasks/html.js`
 * @type {Object}
 */
const html = {
  sourcePath: `${assetPath}/**/*.html`,
  destinationPath: `${assetPath}`,
};

/**
 * Modernizr Settings
 * `tests` specify the modernizr tests to run
 * `settings` will be passed to customizr
 * task: `tasks/modernizr.js`
 * @type {Object}
 */
const modernizr = {
  destinationPath: `${assetPath}/libs`,
  fileName: 'modernizr-custom.js',
  settings: {
    options: [
      'setClasses',
      'addTest',
      'html5printshiv',
      'testProp',
      'fnBind',
    ],
    tests: [],
  },
};

/**
 * Scripts Config
 * uses webpack fur bundling. use the task to configure webpack
 * task: `tasks/scripts.js`
 * @type {Object}
 */
const scripts = {
  bundles: [`${srcPath}/js/*.js`],
  destinationPath: `${assetPath}/js`,
  watch: [`${srcPath}/js/**/*.{js,jsx}`],
  externals: {
    jquery: 'jQuery',
  },
};

/**
 * Styles Config
 * `autoprefixer` will be passed to autoprefixer
 * task: `tasks/styles.js`
 * @type {Object}
 */
const styles = {
  sourcePath: `${srcPath}/styles/**/style.less`,
  destinationPath: `${assetPath}/css`,
  watch: [`${srcPath}/styles/*.less`],
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4'],
  },
};

/**
 * SVG Config
 * task: `tasks/svg.js`
 * @type {Object}
 */
const svg = {
  sourcePath: `${srcPath}/img/**/*.svg`,
  destinationPath: `${assetPath}/svg`,
};

module.exports = {
  browserSync,
  copy,
  output,
  hugo,
  images,
  modernizr,
  port,
  scripts,
  styles,
  svg,
  html
};
