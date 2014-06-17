'use strict';

module.exports = function (grunt) {
  grunt.registerMultiTask('dox', 'Run dox to generate json files', function () {
    var options = this.options({ separator: ',', wrap: ['[', ']'] }),
        dox = require('dox'),
        util = require('util'),
        doc = function (file) {
          var buf = grunt.file.read(file),
              obj = dox.parseComments(buf, {
                raw: options.raw || options.api
              });

          if (options.debug) {
            return grunt.log.debug(util.inspect(obj, false, Infinity, true) + '\n');
          }

          if (options.api) { return dox.api(obj); }

          return JSON.stringify(obj, null, 4);
        };

    this.files.forEach(function (file) {
      grunt.log.writeln('Processing ' + file.src.length + ' files.');

      var src = file.src.filter(function (filepath) {
        console.log(filepath);
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(doc).join(grunt.util.normalizelf(options.separator));

      if (options.wrap && options.wrap instanceof Array) {
        src = options.wrap[0] + src + options.wrap[1];
      }
      grunt.file.write(file.dest, src);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};