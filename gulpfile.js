let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename')
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function() {
   return gulp.src('app/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.stream());
});

gulp.task('css-libs', function() {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/animate.css/animate.css'
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('app/scss'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/wow.js/dist/wow.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
           baseDir: 'app'
       }
   });
});

gulp.task('del', async function() {
  del.sync('dist');
});

gulp.task('export', async function() {
  let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

  let buildCss = gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

  let buildJs = gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'));

  let buildFonts = gulp.src('app/fonts/**/*b')
    .pipe(gulp.dest('dist/fonts'));

  let buildImg = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
   gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
   gulp.watch('app/js/*.js').on('change', browserSync.reload);
   gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('build', gulp.series('del', 'export'));

gulp.task('default', gulp.parallel('scss', 'js', 'css-libs', 'browser-sync', 'watch'));