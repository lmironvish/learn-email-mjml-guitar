const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function prettier() {
  return src("build-test/**/*.html")
    .pipe($.prettier({ singleQuote: true }))
    .pipe(dest("build-test"))
}
