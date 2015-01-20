module.exports = function(request, reply) {
  var package = require('../package.json');
  return reply({
    name: package.name,
    version: package.version
  });
};
