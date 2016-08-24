const createHash = require('crypto').createHash;
const normalize = require('./normalize');

module.exports = function(json, options) {
  const hash = createHash(options.algorithm);
  hash.update(normalize(json));
  return hash.digest(options.encoding);
};
