const test = require('tape');
const normalize = require('..').normalize;

test('normalize', t => {
  t.plan(2);

  t.equal(typeof(normalize({ x: 1 })), 'string');

  t.ok(normalize({ x: 1, y: 1 }) === normalize({ y: 1, x: 1 }));
});
