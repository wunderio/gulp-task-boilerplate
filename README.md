Gulp task boilerplate
=================

> A gulp task boilerplate to pack several tasks into one node module.

## Installation
```sh
npm install --save-dev wunderkraut/gulp-task-boilerplate.
```

## Usage

### Basic usage

```js
// Require gulp.
var gulp = require('gulp')

// Require task module and pass gulp to provide the gulp tasks.
require('gulp-task-boilerplate')(gulp)
```

### Advanced usage
You can also pass a configuration to the task. This allows you to overwrite the default configuration and provide other configuration like a base path for your files.

#### gulpfile.js
```js
var gulp = require('gulp')
var gulpConfig = require('./gulpconfig')

// Just pass the configuration object as second parameter.
require('gulp-task-boilerplate')(gulp, gulpConfig)
```

#### gulpconfig.js
```js
var path = require('path');

module.exports = {
  // Basic configuration.
  basePath: '.',

  // Overwrite default configurations.
  configurationKey: {
    key: 'value',
    src: path.join('some', 'source', 'folder', '*'),
    dest: path.join('some', 'destination', 'folder', '*')
  }
}
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/wunderkraut/gulp-task-boilerplate/issues/new).
