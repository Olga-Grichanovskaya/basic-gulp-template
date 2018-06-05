// подключение пакетов
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'); // проставляет префиксы
const rename = require('gulp-rename'); // переименовывает
const minifycss = require('gulp-cssmin'); // минифицирует css
const tinypng = require('gulp-tinypng');

// задача
gulp.task('css', function(){
    return gulp.src('src/css/**/*.css')
    .pipe(autoprefixer({
        browsers: ['cover 99.5%', 'iOS 7']
    }))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('cssmin', function() {
    return gulp.src('app/css/style.css') // берем файл из папки app/css
    .pipe(minifycss())                  // минифицируем
    .pipe(rename('style.min.css'))      // переименовываем
    .pipe(gulp.dest('app/css/'));      // выгружаем
})

gulp.task('tinypng', function () {
    gulp.src(['src/img/*.png', 'src/img/*.jpg'])
        .pipe(tinypng('4FiCqgY9P7nbUdmuZ3IGLYSVHpxVXOtr'))
        .pipe(gulp.dest('app/img/'));
});

gulp.task('watch', ['css', 'cssmin'], function(){
    gulp.watch('src/css/**/*.css', ['css']); // вотчим за файлами в src/css
    gulp.watch('app/css/style.css', ['cssmin']);
})