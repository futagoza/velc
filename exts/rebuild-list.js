var fs = require("fs");
var join = require("path").join;

fs.writeFileSync(
  join(__dirname, 'extensions.json'),
  JSON.stringify(
    fs.readdirSync(__dirname)
      .map(function(item){
        var path = join(__dirname, item), package;
        if ( fs.statSync(path).isDirectory() ) {
          package = require(join(path, 'package.json'));
          if ( !package.main ) package.main = "index.js";
          package.main = "exts/" + item + "/" + package.main;
          return package;
        }
        return null;
      })
      .filter(function(item){
        return item !== null;
      })
  ) + "\n"
);
