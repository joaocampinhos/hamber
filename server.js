var Hapi = require('hapi'),
    config = require('./config.js');

var server = new Hapi.Server();
server.connection(config);

server.route(require('./routes'));

server.start();
