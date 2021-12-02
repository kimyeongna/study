const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const minifyCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();


//Sass (function)
gulp.task('sass', function(){
    // sass directory
    return gulp.src('./sass/*scss')
            .pipe(sass())
            //outputstyle (nested, compact, expanded, compressed)
            .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
            // sourcemaps
            .pipe(sourcemaps.init())
            // sourcemaps output directory
            .pipe(sourcemaps.write(('./maps')))
            // css output directory
            .pipe(gulp.dest('./css')),
            // watch file
            gulp.watch('./sass/*.scss', ['sass']);
});

//Minify (function) 

// sass/css browser tracking
gulp.task('browser-sync', function(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    // watch html
    gulp.watch('./*.html').on('change', browserSync.reload);
});


gulp.task('hello', () => {
    console.log('hello');
});

gulp.task('world', ['hello'], () => {
    console.log('world');
});


// gulp default (sass, minify-css, browser-sync) method
gulp.task('default', ['sass', 'minify-css', 'browser-sync']);
 
