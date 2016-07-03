var virtualenv = require("virtualenv")
var packagePath = require.resolve("./package.json")
var env = virtualenv(packagePath)

exports.start = function () {
  return env.spawnPython(["./searx/webapp.py"])
}
