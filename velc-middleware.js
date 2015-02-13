// required modules
var express = require("express");
var favicon = require("serve-favicon");
var join = require("path").join;
var __toString = Object.prototype.toString;

// paths to editor, favicon and static content
var paths = {
  editor: join(__dirname, 'editor.html'),
  favicon: join(__dirname, 'favicon.ico'),
  css: join(__dirname, 'css'),
  exts: join(__dirname, 'exts'),
  fonts: join(__dirname, 'fonts'),
  imgs: join(__dirname, 'imgs'),
  js: join(__dirname, 'js')
};

// pre-loaded Velc extensions
var extensions = require("./exts/extensions.json");

// serves the editor file
function serveEditor ( req, res ) { res.sendFile(paths.editor); }

// Velc express middleware
function middleware ( exts ) {
  if ( !Array.isArray(exts) ) {
    exts = exts && __toString.call(exts) === '[object Object]' ? [exts] : extensions;
  }
  var velc = express();

  middleware.statics(velc);
  velc.use(favicon(paths.favicon));

  velc.get('/', serveEditor);
  velc.get('/index.html', serveEditor);
  velc.get('/editor.html', serveEditor);

  velc.get('/exts/extensions.json', function(res){
    res.json(exts);
  });

  return velc;
}

// serves Velc's static files
middleware.statics = function ( ) {
  var app = arguments.length === 0 ? express() : arguments[0];
  app.use('/css', express.static(paths.css));
  app.use('/exts', express.static(paths.exts));
  app.use('/fonts', express.static(paths.fonts));
  app.use('/imgs', express.static(paths.imgs));
  app.use('/js', express.static(paths.js));
  if ( arguments.length === 0 ) return app;
};

// expose 'middleware.paths'
middleware.paths = paths;

// default extensions
extensions.forEach(function(ext){
  middleware[ext.name.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index){
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '')] = ext;
});

// export velc
module.exports = middleware;
