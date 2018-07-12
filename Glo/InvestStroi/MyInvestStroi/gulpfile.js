var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify"),
		rsync          = require('gulp-rsync');

// Пользовательские скрипты проекта

gulp.task('common-js', function() {
	return gulp.src([
		'Project/js/main.js',
		])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('Project/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'Project/libs/jquery-3.3.1.min.js',
		'Project/libs/bootstrap.min.js',
		'Project/libs/jquery.equalheights.min.js',
		'Project/libs/slick/slick.js',
		'Project/libs/powerrange/powerange.js',
		'Project/js/main.min.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('Project/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'Project'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('sass', function() {
	return gulp.src('Project/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('Project/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('Project/sass/**/*.sass', ['sass']);
	gulp.watch(['Project/libs/**/*.js', 'Project/js/main.js'], ['js']);
	gulp.watch('Project/*.html', browserSync.reload);
});

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
