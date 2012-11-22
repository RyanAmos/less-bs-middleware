var path = require('path')
  , url = require('url');

module.exports = function(options) {
  options = options || {};

  // setup bootstrap options
  var _options = {};
  for(var k in options) {
    _options[k] = options[k];
  }
  _options.dest = options.dest || options.src;
  _options.src = path.resolve(path.join(__dirname, '../', 'node_modules', 'bootstrap', 'less'));

  // setup the seperate less middlewares
  var less = require('less-middleware')(options)
    , bootstrap = require('less-middleware')(_options);

  return function(req, res, next) {
    if ('GET' != req.method.toUpperCase() && 'HEAD' != req.method.toUpperCase()) { return next(); }

    less(req, res, function(err) {
      if(err) return next(err);
      bootstrap(req, res, next);
    });
  };
};