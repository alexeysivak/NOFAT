const { series, src, dest, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const fileInclude = require('gulp-file-include');
const newer = require('gulp-newer');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webpHtml = require('gulp-webp-html');
const webpCss = require('gulp-webpcss');
const ttfToWoff = require('gulp-ttf2woff');
const ttfToWoff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');
const scss = require('gulp-sass');

const isDevelopment = process.env.NODE_ENV;

const souceFolder = 'src';
const destFolder = 'dist';

const path = {
	src: {
		html: `${souceFolder}/html/*.html`,
		js: `${souceFolder}/js/*.js`,
		css: [`${souceFolder}/styles/main.scss`, `!${souceFolder}/styles/main.css`],
		fonts: `${souceFolder}/fonts/**/*.{ttf,otf,woff,woff2,gif}`,
		img: `${souceFolder}/images/**/*.{jpg,png,svg,gif,ico,webp}`,
	},

	build: {
		html: `${destFolder}/html`,
		js: `${destFolder}/js/`,
		css: `${destFolder}/styles/`,
		fonts: `${destFolder}/fonts/`,
		img: `${destFolder}/images/`,
	},

	fonter: {
		src: `${souceFolder}/fonts/**/*.ttf`,
		build: `${souceFolder}/fonts`,
	},
};

function serve(cb) {
	browserSync.init({
		server: {
			baseDir: `./${destFolder}`,
		},
		port: 3000,
		notify: false,
		index: 'main.html',
	});

	browserSync.watch(`${destFolder}/**/*.*`).on('change', browserSync.reload);
	cb();
}

function copyHtml() {
	return src(path.src.html)
		.pipe(gulpIf(isDevelopment == 'dev', sourcemaps.init()))
		.pipe(fileInclude())
		.pipe(webpHtml())
		.pipe(gulpIf(isDevelopment === 'dev', sourcemaps.write()))
		.pipe(dest(path.build.html))
		.pipe(browserSync.stream());
}

function copyCss() {
	return src(path.src.css)
		.pipe(gulpIf(isDevelopment == 'dev', sourcemaps.init()))
		.pipe(
			scss({
				outputStyle: 'expanded',
			}),
		)
		.pipe(concat('main.css'))
		.pipe(dest(path.build.css))
		.pipe(src(path.src.css))
		.pipe(
			scss({
				outputStyle: 'expanded',
			}),
		)
		.pipe(concat('main.css'))
		.pipe(webpCss())
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulpIf(isDevelopment == 'dev', sourcemaps.write()))
		.pipe(dest(path.build.css))
		.pipe(browserSync.stream());
}

function copyJS() {
	return src(path.src.js)
		.pipe(gulpIf(isDevelopment == 'dev', sourcemaps.init()))
		.pipe(fileInclude())
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			}),
		)
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulpIf(isDevelopment == 'dev', sourcemaps.write()))
		.pipe(dest(path.build.js))
		.pipe(browserSync.stream());
}

function copyImgs() {
	return src(path.src.img)
		.pipe(newer(path.build.img))
		.pipe(
			webp({
				quality: 80,
			}),
		)
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(
			imagemin({
				optimizationLevel: 3,
			}),
		)
		.pipe(dest(path.build.img))
		.pipe(browserSync.stream());
}

function copyFonts() {
	return (
		src(path.src.fonts)
			.pipe(
				fonter({
					formats: ['ttf'],
				}),
			)
			.pipe(dest(path.fonter.build))
			.pipe(src(path.fonter.src))
			.pipe(dest(path.build.fonts))
			// .pipe(src(path.fonter.src))
			// .pipe(ttfToWoff())
			// .pipe(dest(path.build.fonts))
			.pipe(src(path.fonter.src))
			.pipe(ttfToWoff2())
			.pipe(dest(path.build.fonts))
	);
}

function watchFiles() {
	watch(path.src.html, series(copyHtml));
	watch(path.src.css, series(copyCss));
	watch(path.src.js, series(copyJS));
	watch(path.src.img, series(copyImgs));
	watch(path.src.fonts, series(copyFonts));
}

function cleanDist() {
	return src(destFolder).pipe(clean());
}

exports.watch = series(cleanDist, copyHtml, copyCss, copyJS, copyFonts, copyImgs, parallel(watchFiles /*,serve*/));
exports.default = series(cleanDist, copyHtml, copyCss, copyJS, copyFonts, copyImgs);
