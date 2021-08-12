const USersHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const usersHandler = new USersHandler(service, validator);
    server.route(routes(usersHandler));
  },
};
