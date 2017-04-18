'use strict';

var Hapi = require('hapi');
var Path = require('path');
// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000
});

server.register(require('vision'), function (err) {
  if (err) {
    throw err;
  }

  // Add Routes
  server.route({
    method: 'GET',
    path: '/',
    handler: function handler(request, reply) {
      // console.log(reply);
      return reply.view('index', { name: 'Xvipes' });
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function handler(request, reply) {
      console.log(request.params.param);
      directory: {
        path: 'public';
      }
    }
  });

  // Add Views
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: '../public'
  });
});

// Start the server
server.start(function (err) {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});