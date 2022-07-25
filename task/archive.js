const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function archive() {
  return src("build-test/**")
    .pipe(
      $.zip("arhive.zip", {
        compress: false,
      })
    )
    .pipe(dest("build-test"))
}
