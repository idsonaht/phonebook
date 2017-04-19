const Entry = require('../models/entry');

function findAll(request, reply) {
    Entry.find()
        .then(result => {
            reply(result || []);
        });
}

function findOne(request, reply) {
    Entry.findOne({ _id: request.params.id })
        .then(result => {
            let response;

            if (result === null) {
                response = {}
            } else {
                response = result;
            }

            reply(response);
        });
}

function create(request, reply) {
    Entry.create(request.payload)
        .then((r) => {
            reply(r).code(201);
        })
        .catch(err => {
            reply('Error').code(500);
        });
}

function update(request, reply) {
    const entry = request.pre.entry;
    entry.set(request.payload);

    entry.save()
        .then(() => {
            reply(entry);
        })
        .catch(err => {
            reply('Error').code(500);
        });
}

function remove(request, reply) {
    const entry = request.pre.entry;
    entry.remove()
        .then(() => {
            reply().code(204);
        })
}

module.exports = [
    {
        path: '/api/entries',
        method: 'GET',
        config: {
            handler: findAll
        }
    },
    {
        path: '/api/entries/{id}',
        method: 'GET',
        config: {
            handler: findOne
        }
    },
    {
        path: '/api/entries',
        method: 'POST',
        config: {
            handler: create
        }
    },
    {
        path: '/api/entries/{id}',
        method: 'PATCH',
        config: {
            pre: [{
                method: findOne,
                assign: 'entry',
                failAction: 'error'
            }],
            handler: update
        }
    },
    {
        path: '/api/entries/{id}',
        method: 'DELETE',
        config: {
            pre: [{
                method: findOne,
                assign: 'entry',
                failAction: 'error'
            }],
            handler: remove
        }
    }

]
