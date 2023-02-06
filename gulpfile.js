/*
  Usage:
  1. npm install // To install all dev dependencies of package
  2. npm run dev // To start development and server for live preview
  3. npm run prod // To generate minifed files for live server
*/

const { src, dest, task, watch, series, parallel } = require('gulp');
const del = require('del'); // For Cleaning build/dist for fresh export
const options = require("./config"); // paths and other options from config.js
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass')(require('sass')); // For Compiling SASS files
const postcss = require('gulp-postcss'); // For Compiling tailwind utilities with tailwind config
const autoprefixer = require('autoprefixer'); // For parses the CSS and adds vendor prefixes
const concat = require('gulp-concat'); // For Concatinating js,css files
const cleanCSS = require('gulp-clean-css');// To Minify CSS files
const purgecss = require('gulp-purgecss');// Remove Unused CSS from Styles

//Note : Webp still not supported in major browsers including firefox
const webp = require('gulp-webp'); //For converting images to WebP format
const replace = require('gulp-replace'); //For Replacing img formats to webp in html
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P 

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.src.base
    },
    port: options.config.port || 5000
  });
  done();
}

// Triggers Browser reload
function previewReload(done) {
  console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

//Development Tasks
function devHTML() {
  return src(`${options.paths.src.base}/**/*.html`);
}

function devStyles() {
  return src(`${options.paths.src.css}/**/*.css`)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(options.paths.src.css))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest(options.paths.dist.css));
}

function devScripts() {
  return src(
    `${options.paths.src.js}/**/*.js`,
  )
    .pipe(dest(options.paths.dist.js));
}

function devImages() {
  return src(`${options.paths.src.img}/**/*.svg`).pipe(dest(options.paths.dist.img));
}

function devImagesWebp() {
  return src(
    `${options.paths.src.img}/**/*.{jpg,png}`)
    .pipe(webp())
    .pipe(dest(options.paths.dist.img));
}

function replaceImageExt() {
  return src(`${options.paths.src.base}/**/*.html`)
    .pipe(replace('.jpg', '.webp'))
    .pipe(replace('.png', '.webp'))
    .pipe(dest(options.paths.dist.base));
};

function watchFiles() {
  watch(`${options.paths.src.base}/**/*.html`, series(devHTML, previewReload));
  console.log("\n\t" + logSymbols.info, "Watching for Changes..\n");
}

function devClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning dist folder for fresh start.\n");
  return del([options.paths.dist.base]);
}

//Production Tasks (Optimized Build for Live/Production Sites)
function prodHTML() {
  return src(`${options.paths.src.base}/**/*.html`).pipe(dest(options.paths.build.base));
}

function prodStyles() {
  return src(`${options.paths.dist.css}/**/*`)
    .pipe(purgecss({
      content: ['src/**/*.{html,js}'],
      defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
        return broadMatches.concat(innerMatches)
      }
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest(options.paths.build.css));
}

function prodClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning build folder for fresh start.\n");
  return del([options.paths.build.base]);
}

function buildFinish(done) {
  console.log("\n\t" + logSymbols.info, `Production build is complete. Files are located at ${options.paths.build.base}\n`);
  done();
}

exports.default = series(
  devClean, // Clean Dist Folder
  parallel(devStyles, devScripts, devImages, devImagesWebp, replaceImageExt, devHTML), //Run All tasks in parallel
  livePreview, // Live Preview Build
  watchFiles // Watch for Live Changes
);

exports.prod = series(
  prodClean, // Clean Build Folder
  parallel(prodStyles, prodHTML), //Run All tasks in parallel
  buildFinish
);