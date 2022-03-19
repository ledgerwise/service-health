'use strict';

const AVAILABLE_SERVICES = ['dummy', 'atomic', 'hyperion'];

module.exports = async function (fastify, opts) {
  fastify.get('/:service', async function (request, reply) {
    const { service } = request.params;
    let check;
    try {
      check = require('../../checks/' + service);
    } catch (error) {
      console.log(error);
      throw new Error(`Service ${service} is not available`);
    }

    return check();
  });
};
