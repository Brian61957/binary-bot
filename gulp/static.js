const gulp = require('gulp');
const del = require('del');
const paths = require('vinyl-paths');
const rev = require('gulp-rev');
const through = require('through2');
const sourcemaps = require('gulp-sourcemaps');

// ✅ Use dart-sass
const dartSass = require('sass');
const gulpSass = require('gulp-sass')(dartSass);

const addToManifest = require('./revision').addToManifest;

// Clean old CSS files
gulp.task(
    'clean-css',
    gulp.series(() =>
        gulp
            .src(
                ['./www/css/-.css', '!./www/css/bundle-', 'static/css/.css*'],
                { allowEmpty: true } // ✅ prevents crash if empty
            )
            .pipe(paths(del))
    )
);

// Compile SCSS to CSS
gulp.task(
    'sass',
    gulp.series('clean-css', () =>
        gulp
            .src(['static/css/bot.scss', 'static/css/index.scss'], { allowEmpty: true })
            .pipe(sourcemaps.init())
            .pipe(gulpSass().on('error', gulpSass.logError)) // ✅ dart-sass used here
            .pipe(rev())
            .pipe(through.obj(addToManifest))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./static/css'))
    )
);

// Copy CSS to /www
gulp.task(
    'static-css',
    gulp.series('sass', () => gulp.src('static/css/.css', { allowEmpty: true }).pipe(gulp.dest('./www/css')))
);

// Copy other static assets
gulp.task(
    'static',
    gulp.series('static-css', () =>
        gulp.src(['static/', '!static/css/*'], { allowEmpty: true }).pipe(gulp.dest('./www'))
    )
);

// Copy jquery-ui images
gulp.task(
    'copy-jquery-img',
    gulp.series(() =>
        gulp.src('node_modules/jquery-ui-css/images/*', { allowEmpty: true }).pipe(gulp.dest('www/css/images'))
    )
);

// Copy binary-style CSS
gulp.task(
    'copy-binary-style-css',
    gulp.series(() => gulp.src('node_modules/binary-style/binary.css', { allowEmpty: true }).pipe(gulp.dest('www/css')))
);

// Copy binary-style images
gulp.task(
    'copy-binary-style-img',
    gulp.series(() =>
        gulp
            .src('node_modules/binary-style/src/images/', { allowEmpty: true })
            .pipe(gulp.dest('www/image/binary-style'))
    )
);
