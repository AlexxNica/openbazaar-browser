// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    order = require("gulp-order"),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

// Styles
gulp.task('styles', function() {
    return gulp.src(['src/styles/sass/site.scss'])
    .pipe(sass({
        style: 'compressed',
        errLogToConsole: true
    }))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Lint
gulp.task('lint', function() {
    return gulp.src('src/scripts/site.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'Lint task complete' }));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/ie-only/*.js'])
    .pipe(order([
        "libs/jquery-3.2.1.min.js",
        "libs/jquery.cycle2.min.js",
        "libs/isotope.js",
        "controller.js",
        "event_listeners.js",
        "functions.js",
        "api_returns.js",
        "get_data.js",
        "model.js",
        "templates.js",
        "render.js",
        "libs/*.js",
        "site.js"
     ]))
    .pipe(concat('site.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Page-Specific Scripts
gulp.task('ie-only-scripts', function() {
    return gulp.src(['src/scripts/ie-only/*.js'])
    .pipe(concat('ie-only.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'IE-only scripts task complete' }));
});

// Images
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
    .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'ie-only-scripts', 'images');
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/images/**/*', ['images']);

});
