var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
//gulp.task('default', defaultTask);

gulp.task('minify-css', function(done) {
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))
    done();
});

gulp.task('move-js', function(done) {
    return gulp.src('./src/JavaScript/*.js')
    .pipe(gulp.dest('dist/JavaScript/'))
    done();
});

gulp.task('htmlMin', function(done) {
    return gulp.src('./src/*.html')
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'))
    done();
});

gulp.task('fonts', function(done) {
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    done();
});

gulp.task('tinypng', function (done) {
    return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: '0W5z17kqN8YZR3JgyFqrH1hdWwSftqyf',
        }))
        .pipe(gulp.dest('dist/img/'));
    done();
});

gulp.task('move-php', function(done) {
    return gulp.src('./src/php/*.php')
    .pipe(gulp.dest('dist/php'))
    done();
});

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlMin', 'fonts', 'tinypng', 'move-php', function (done) {
    done();
}));