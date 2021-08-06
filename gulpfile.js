const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass"); // минификация
const concat = require("gulp-concat"); // конкатенация + имя
const browserSync = require("browser-sync").create(); // live update 
const uglify = require("gulp-uglify-es").default; //
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin"); // отпимизация img
const del = require("del"); // удаление dist-папки
//const ghpages = require('gh-pages'); // gh-pages for dist folder


// ghpages.publish('dist', {
//     repo: 'https://github.com/Fpsska/Advance-Task.git',
//     message: 'Auto-generated commit'
// });

function cleanDist() {
    return del("dist");
}

function images() {
    return src("app/assets/images/**/*")
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]
        ))
        .pipe(dest("dist/img"));
}

function scripts() {
    return src([
        "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
        "node_modules/jquery/dist/jquery.js",
        "node_modules/owl.carousel/dist/owl.carousel.js",
        "app/assets/js/main.js"
    ])
        .pipe(concat("main.min.js")) 
        .pipe(uglify())   
        .pipe(dest("app/assets/js"))  
        .pipe(browserSync.stream());
}

function styles() {       
    return src([
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/owl.carousel/dist/assets/owl.carousel.css",
        "app/assets/scss/style.scss"
    ])
        .pipe(scss({ outputStyle: "expanded" })) 
        .pipe(concat("style.css")) 
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 10 version"],
            grid: true
        }))
        .pipe(dest("app/assets/css")) 
        .pipe(browserSync.stream());
}

function browsersync() {  
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function watching() {
    watch(["app/assets/scss/**/*.scss"], styles);
    watch(["app/assets/js/**/*.js", "!app/assets/js/main.min.js"], scripts);
    watch(["app/*.html"]).on("change", browserSync.reload);
}

function build() {
    return src([
        "app/*.html",
        "app/assets/css/style.css",
        "app/assets/js/main.js"
    ], { base: "app" })
        .pipe(dest([
            "dist/assets"
        ]));
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);
