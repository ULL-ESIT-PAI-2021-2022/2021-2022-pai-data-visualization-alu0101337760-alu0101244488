const express = require('express');
const PATH = require('path');

const APP = express();

// set the port
APP.set('port', 8080);

// tell express that we want to use the www folder
// for our static assets
console.log(__dirname)
APP.use(express.static(PATH.join(__dirname, process.argv.slice(2).shift() || '/')));

// Listen for requests
const SERVER = APP.listen(APP.get('port'), '0.0.0.0', function() {
  console.log(
      'The server is running on http://10.6.129.150:' +
      APP.get('port'));
});
