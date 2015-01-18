var config = module.exports = {};

config.port = process.env.PORT || 3000;
config.host = 'localhost';

config.router = {
  stripTrailingSlash: true
};
