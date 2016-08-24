module.exports = function(json) {
  return JSON.stringify(sort(json));
};

function sort(o) {
  return Object.keys(o).sort().reduce((memo, key) => {
    const v = o[key];
    memo[key] = (typeof(v) === 'object') ? sort(v) : v;
    return memo;
  }, {});
}
