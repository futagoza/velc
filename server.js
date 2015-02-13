var server = require("./velc-middleware")().listen(process.env.PORT || 8080, process.env.IP || "localhost", function (){

  var address = server.address();

  console.log('Velc server located@ http://%s:%s', address.host, address.port);

});
