const phonebookRoutes = require('./phonebook');

module.exports.register = function (server, options, next) {
	server.route(phonebookRoutes);
	next();
};

module.exports.register.attributes = {
	name: 'routes'
};
