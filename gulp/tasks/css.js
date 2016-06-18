var gulp              = require('gulp'),
    paths             = require('../config').paths,
    errorHandler      = require('../config').swallowError,
    browserReqs       = require('../config').browserReqs,
    sourcemaps        = require('gulp-sourcemaps'),
    postcss           = require('gulp-postcss'),
    autoprefixer      = require('autoprefixer'),
    lost              = require('lost'),
    postcssEasyImport = require('postcss-easy-import'),
    postcssColorFunc  = require('postcss-color-function'),
    postcssMixins     = require('postcss-mixins'),
    postcssNested     = require('postcss-nested'),
    postcssPXtoREM    = require('postcss-pxtorem'),
    postcssSimpleVars = require('postcss-simple-vars');

gulp.task('css', function() {

  var postCSSProcessors = [
        postcssEasyImport({ glob: true, path: ['./node_modules', './bower_components'] }),
        postcssMixins,
        postcssNested,
        postcssPXtoREM,
        postcssSimpleVars,
        postcssColorFunc,
        autoprefixer({ browsers: browserReqs }),
        lost
      ];

  return gulp.src(paths.src.css + "/app.css")
    .pipe(sourcemaps.init())
    .pipe(postcss(postCSSProcessors).on('error', errorHandler))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(paths.dist.css))
    .on('error', errorHandler)
});
