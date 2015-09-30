'use strict';

var path = require('path');
var defaultsDeep = require('lodash.defaultsdeep');

module.exports = function (gulp, gulpConfig) {

  gulpConfig = gulpConfig || { basePath: '.' };

  // Merge default config with gulp config.
  var defaultConfig = {
    configurationKey: {
      key: 'value',
      src: path.join('some', 'source', 'folder', '*'),
      dest: path.join('some', 'destination', 'folder', '*')
    }
  };

  var config = defaultsDeep(gulpConfig, defaultConfig).configurationKey;

  gulp.task('boilerplate', function () {
    return gulp.src(path.join(gulpConfig.basePath, config.src))
      .pipe(gulp.dest(path.join(gulpConfig.basePath, config.dest)));
  });
};
