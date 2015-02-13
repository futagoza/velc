PEG.js inspired programming language creator using visual based tools.

# install

with server (requires [Node.js](http://nodejs.org/) or [io.js](https://iojs.org/)):

  ```shell
  npm install velc
  ```

only editor (requires [git](http://git-scm.com/)):

  ```shell
  git clone https://github.com/erispa/velc.git
  ```

# download

You can also download Velc from [github](https://github.com/erispa/velc/archive/gh-pages.zip) and then extract it to your desired directory using any extracter that supports zip files.

# usage

with Velc server only:

  * go to where you have installed Velc
  * (optional) on command line type: `npm install`
  * on command line type: `node server.js`

with Velc express middleware:

  ```javascript
  // required modules
  var express = require("express");
  var velc = require("velc");

  // create a new express application
  var app = express();

  // ...
  // your express code
  // ...

  // an array of extensions
  var exts = [velc.darkTheme, velc.codeMirror, velc.pegjsExamples, velc.pegjsGrammer];

  // attach Velc's middleware
  app.use("velc", velc(exts));

  // ...
  // your express/http listen code
  // ...
  ```

just editor:

  * go to where you have installed Velc
  * open 'editor.html' in any browser

# third-party tools used

editor:

  * Bootstrap 3.3.2 - [http://getbootstrap.com/](http://getbootstrap.com/)
  * Font Awesome 4.3.0 - [http://fortawesome.github.io/Font-Awesome/](http://fortawesome.github.io/Font-Awesome/)

server:

  * Express 4.11.2 - [http://expressjs.com/](http://expressjs.com/)
  * serve-favicon 2.2.0 - [https://github.com/expressjs/serve-favicon](https://github.com/expressjs/serve-favicon)

Links
-----

  Homepage: https://erispa.github.io/velc<br>
  Wiki: https://github.com/erispa/velc/wiki<br>
  Issues: https://github.com/erispa/velc/issues<br>
  NPM: https://www.npmjs.com/package/velc

License
-------
Copyright (c) 2015 Futago-za Ryuu, Erispa<br>
The MIT License, http://opensource.org/licenses/MIT
