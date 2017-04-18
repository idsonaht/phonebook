'use strict';

const Hapi = require('hapi');
const Path = require('path');
// Create a server with a host and port
const server = new Hapi.Server();
const port =  process.env.PORT
server.connection({
    port: process.env.PORT,
    routes: { cors: true }
});

server.register([
    require('vision'),
    require('./routes')
  ], function(err) {
  if (err) {
    throw err;
  }

  // Add Routes
  server.route({
      method: 'GET',
      path:'/',
      handler: function (request, reply) {
         //console.log(reply);
          return reply.view('index', {name: 'Xvipes'});
      }
  });

  server.route({
      method: 'GET',
      path:'/{param*}',
      handler: function (request, reply) {
        //console.log(request.params.param);
        directory: {path: 'public'}
      }
  });

  // Add Views
  server.views({
    engines:{
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: '../build'
  });
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
