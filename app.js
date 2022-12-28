const amount = 10;

if (amount < 20) {
  console.log("The number is smaller than 20");
} else {
  console.log("The number is greater than 20");
}

const kapil = "20";

const rahul = "The same name";

module.exports = { kapil, rahul };
// One way to do the exports there are other ways also.
// console.log(module);

// Node built in module
const os = require("os");
console.log(os.uptime());

// Node built in module 'path'

const path = require("path");
console.log(path.sep);

const newPath = path.join("/Backend1", "file", "app.js");
console.log(newPath);
