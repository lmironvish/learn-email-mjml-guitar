const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function changepath() {
  return src("build-test/**/*.html")
    .pipe(
      $.replace(
        /\b[^>]*\bbackground-image: url\('([^"]*\/)[^\/"]*"[^<>]*/gim,
        (match, p1) => match.replace(p1, "image/")
      )
    )
    .pipe(
      $.replace(/\b[^>]*\bsrc="([^"]*\/)[^\/"]*"[^<>]*/gim, (match, p1) =>
        match.replace(p1, "image/")
      )
    )
    .pipe(dest("build-test"))
}
