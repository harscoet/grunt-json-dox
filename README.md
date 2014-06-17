# grunt-json-dox

> Run [dox](https://github.com/visionmedia/dox) to generate json files

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-dox --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-dox');
```

## The "dox" task

### Overview
In your project's Gruntfile, add a section named `dox` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dox: {
    default: {
      options: {
       // Task-specific options go here.
      },
      your_target: [
       // Target-specific file lists and/or options go here.
      ]
    }
  }
})
```

### Options

Please check [dox](https://github.com/visionmedia/dox) options.


### Usage Examples

#### Default Options
In this example, the default options are used (separator between files is ',' and wrap is '[' and ']'

```js
grunt.initConfig({
  dox: {
    default: {
      options: {},
        files: {
          'dest/default_options.json': ['src/*.js']
       }
    }
  }
})
```

#### Custom Options
In this example, custom options are used to change the wrap option

```js
grunt.initConfig({
  dox: {
    default: {
      options: {
        wrap: ['{', '}']
      },
      files: {
        'dest/default_options.json': ['src/*.js']
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Donovan Harscoët. Licensed under the MIT license.
