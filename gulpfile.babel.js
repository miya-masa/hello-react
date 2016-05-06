import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Lint JavaScript
gulp.task('lint', () => gulp.src('app/src/**/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

function bundle(tutorialID, bundler) {
  return bundler.bundle()
    // log errors if they happen
    .on('error', $.util.log.bind($.util, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe($.sourcemaps.init({
      loadMaps: true
    }))
    // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    .pipe($.sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest(`./${tutorialID}/dist`))
    .pipe(reload({
      stream: true,
      once: true
    }));
}

['1', '2'].forEach((e) => {
  const tutorialID = `tutorial${e}`;

  const customOpts = {
    entries: [`./${tutorialID}/src/main.js`],
    debug: true
  };

  const opts = Object.assign({}, watchify.args, customOpts);
  const bundler = watchify(browserify(opts));

  gulp.task(`watch:${tutorialID}`, () => {
    bundler.on('update', () => bundle(tutorialID, bundler));
    bundler.on('log', $.util.log);
    return bundle(tutorialID, bundler);
  });

  // Watch files for changes & reload
  gulp.task(`${tutorialID}`, [`watch:${tutorialID}`], () => {
    browserSync({
      notify: false,
      // Customize the Browsersync console logging prefix
      logPrefix: 'WSK',
      server: [tutorialID],
      port: 3000
    });

    gulp.watch([`${tutorialID}/**/*.html`], reload);
    gulp.watch([`${tutorialID}/src/**/*.js`, `${tutorialID}/src/**/*.jsx`], ['lint']);
  });
});
