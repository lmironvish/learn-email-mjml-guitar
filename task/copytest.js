const { src, dest } = require("gulp")

module.exports = function copytest() {
  return src("build-test/**/*.html").pipe(dest("build"))
}
