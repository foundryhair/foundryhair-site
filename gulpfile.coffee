######################
# Requires
######################

del               = require 'del'
fs                = require 'fs'
gulp              = require 'gulp'
changed           = require 'gulp-changed'
coffee            = require 'gulp-coffee'
concat            = require 'gulp-concat'
filter            = require 'gulp-filter'
foreach           = require 'gulp-foreach'
jade              = require 'gulp-jade'
jshint            = require 'gulp-jshint'
gulpIf            = require 'gulp-if'
imagemin          = require 'gulp-imagemin'
imageResize       = require 'gulp-image-resize'
include           = require 'gulp-include'
notify            = require 'gulp-notify'
order             = require 'gulp-order'
postcss           = require 'gulp-postcss'
rename            = require 'gulp-rename'
sass              = require 'gulp-sass'
sourcemaps        = require 'gulp-sourcemaps'
tap               = require 'gulp-tap'
uglify            = require 'gulp-uglify'
gutil             = require 'gulp-util'
gzip              = require 'gulp-gzip'
autoprefixer      = require 'autoprefixer'
mqpacker          = require 'css-mqpacker'
csswring          = require 'csswring'
cssnext           = require 'cssnext'
stylish           = require 'jshint-stylish'
lost              = require 'lost'
bower             = require 'main-bower-files'
path              = require 'path'
postcssmixins     = require 'postcss-mixins'
postcssnested     = require 'postcss-nested'
postcsssimplevars = require 'postcss-simple-vars'
postcssimport     = require 'postcss-import'
browsersync       = require 'browser-sync'
source            = require 'vinyl-source-stream'
watchify          = require 'watchify'

ghPages           = require 'gulp-gh-pages'

fatalLevel        = require('yargs').argv.fatal


deleteFolderRecursive = (path) ->
  if fs.existsSync(path)
    fs.readdirSync(path).forEach (file,index) ->
      curPath = path + "/" + file
      if fs.lstatSync(curPath).isDirectory()
        deleteFolderRecursive(curPath)
      else
        fs.unlinkSync(curPath)
    fs.rmdirSync(path)


####################
# Base Paths
####################

paths =
  base:
    root : ''
    src  : 'src/'
    dist : 'dist/'

paths.src =
  css    : paths.base.src + 'assets/css'
  fonts  : paths.base.src + 'assets/fonts'
  js     : paths.base.src + 'assets/js'
  images : paths.base.src + 'assets/images'
  html   : paths.base.src + 'html'

paths.dist =
  css    : paths.base.dist + 'assets/css'
  fonts  : paths.base.dist + 'assets/fonts'
  js     : paths.base.dist + 'assets/js'
  images : paths.base.dist + 'assets/images'
  html   : paths.base.dist + ''




####################
# Error Handling (ref. https://gist.github.com/noahmiller/61699ad1b0a7cc65ae2d)
####################

watching = false

# Command line option:
#  --fatal=[warning|error|off]
ERROR_LEVELS = ['error', 'warning']

# Return true if the given level is equal to or more severe than
# the configured fatality error level.
# If the fatalLevel is 'off', then this will always return false.
# Defaults the fatalLevel to 'error'.
isFatal = (level) ->
  ERROR_LEVELS.indexOf(level) <= ERROR_LEVELS.indexOf(fatalLevel || 'error')

# Handle an error based on its severity level.
# Log all levels, and exit the process for fatal levels.
# ref. http://stackoverflow.com/questions/21602332/catching-gulp-mocha-errors#answers
handleError = (level, error) ->
  gutil.log(error.message)
  # if isFatal(level)
  #   process.exit(1)
  if watching
    this.emit('end')
  else
    process.exit(1)

# Convenience handler for error-level errors.
onError = (error) -> handleError.call(this, 'error', error)
# Convenience handler for warning-level errors.
onWarning = (error) -> handleError.call(this, 'warning', error)




######################
# Tasks
######################

gulp.task 'deploy', ->
  return gulp.src('./dist/**/*')
    .pipe ghPages
      remoteUrl : "https://github.com/taylorkmho/foundryhair-site.git"

gulp.task 'static-files', ->
  gulp.src "#{paths.base.src}/*.*"
    .pipe gulp.dest(paths.base.dist)

  gulp.src "#{paths.base.src}/data/**/*"
    .pipe gulp.dest("#{paths.base.dist}/data")




gulp.task 'html', ->
  gulp.src "#{paths.src.html}/**/[^_]*.jade"
    # .pipe changed(paths.src.html)
    .pipe jade()
    .on('error', onError)
    .pipe gulp.dest(paths.dist.html)




gulp.task 'css', ->
  postCSSProcessors = [
    postcssimport from: "#{paths.src.css}/app.css"
    postcssmixins
    postcsssimplevars
    postcssnested
    lost
    autoprefixer  browsers: ['last 1 version']
    # mqpacker      sort: false
    cssnext       compress: false
  ]

  gulp.src "#{paths.src.css}/**/[^_]*.{css,scss}"
    # .pipe changed(paths.dist.css)
    .pipe concat('app.css')
    .pipe sourcemaps.init()
      .pipe sass({ errLogToConsole: true }).on('error', onError)
      .pipe postcss(postCSSProcessors).on('error', onError)
    .pipe sourcemaps.write('maps')
    .pipe gulp.dest(paths.dist.css)
    # .pipe gzip({ append: true })
    # .pipe gulp.dest(paths.dist.css)
    .on('error', onError)

  # Copy files as-is from the bower packages. Refer to bower.json.
  # UPDATE - should these just be brought into app.css? Commented out for now
  # gulp.src bower()
  #   .pipe filter('*.css')
  #   .pipe changed(paths.dist.css)
  #   .pipe sourcemaps.init()
  #     .pipe postcss(postCSSProcessors)
  #   .pipe sourcemaps.write('maps')
  #   .pipe gulp.dest(paths.dist.css)
  #   .pipe gzip({ append: true })
  #   .pipe gulp.dest(paths.dist.css)
  #   .on('error', onError)




gulp.task 'fonts', ->
  gulp.src "#{paths.src.fonts}/**/*"
    .pipe gulp.dest(paths.dist.fonts)




gulp.task 'js', ->

  gulp.src "#{paths.src.js}/**/[^_]*.{js,coffee}"
    .pipe order([
      "utils.js"
      "app.js"
    ])
    # .pipe changed(paths.dist.js)
    .pipe include().on('error', onError)
    # .pipe gulpIf(/[.]js/, jshint())
    # .pipe gulpIf(/[.]js/, jshint.reporter('jshint-stylish'))
    .pipe concat('app.js')
    .pipe sourcemaps.init()
      .pipe gulpIf(/[.].coffee/, coffee({ bare: true }).on('error', onError))
      .pipe uglify().on('error', onError)
    .pipe sourcemaps.write('maps')
    .pipe gulp.dest(paths.dist.js)
    # .pipe gzip({ append: true })
    # .pipe gulp.dest(paths.dist.js)
    .on('error', onError)

  # # Copy files as-is from the bower packages. Refer to bower.json.
  gulp.src bower()
    .pipe filter('*.js')
    # .pipe changed(paths.dist.css)
    # .pipe sourcemaps.init()
    .pipe uglify().on('error', onError)
    # .pipe sourcemaps.write('maps')
    .pipe gulp.dest(paths.dist.js)
    # .pipe gzip({ append: true })
    # .pipe gulp.dest(paths.dist.js)
    .on('error', onError)

gulp.task 'images', ->
  gulp.src("#{paths.src.images}/**/*.{gif,jpg,png,svg,swf}")
    # .pipe changed(paths.dist.images)
    # .pipe imagemin
    #   progressive: true,
    #   svgoPlugins: [removeViewBox: false],
    #   optimizationLevel: 3 # png
    .pipe gulp.dest(paths.dist.images)




gulp.task 'clean', ->
  deleteFolderRecursive(paths.base.dist)




gulp.task 'build', ['static-files', 'html', 'css', 'fonts', 'js', 'images']




gulp.task 'refresh', ['clean', 'build']




gulp.task 'browsersync', ->
  browsersync.use
    plugin: ->,
    hooks:
      'client:js': fs.readFileSync("./lib/closer.js", "utf-8")
  browsersync.init [paths.dist.html, paths.dist.css, paths.dist.js],
    server:
      baseDir: paths.dist.html




gulp.task 'watch', ['browsersync'], ->
  watching = true
  gulp.watch ["#{paths.base.src}/*.*", "#{paths.base.src}/data/**/*"], ['static-files']
  gulp.watch "#{paths.src.html}/**/*.jade", ['html']
  gulp.watch "#{paths.src.css}/**/*", ['css']
  gulp.watch "#{paths.src.fonts}/**/*", ['fonts']
  gulp.watch "#{paths.src.js}/**/*.{js,coffee}", ['js']
  gulp.watch "#{paths.src.images}/**/*.{gif,jpg,png,svg,swf}", ['images']



gulp.task 'default', ['refresh', 'watch']