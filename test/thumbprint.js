const test = require('tape');
const thumbprint = require('..').thumbprint;

test('thumbprint', t => {
  t.plan(6);

  /*
   * Test based on the example on rfc7638.
   */
  const json = {
    "kty": "RSA",
    "n": "0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAt" +
      "VT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn6" +
      "4tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FD" +
      "W2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n9" +
      "1CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINH" +
      "aQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw",
    "e": "AQAB",
    // "alg": "RS256",
    // "kid": "2011-04-29"
  };
  const expected = new Buffer([
    55, 54, 203, 177, 120, 124, 184, 48, 156, 119, 238, 140, 55, 5, 197,
    225, 111, 251, 158, 133, 151, 21, 144, 31, 30, 76, 89, 177, 17, 130,
    245, 123
  ]);

  const result1 = thumbprint(json, { algorithm: 'sha256' });

  t.ok(result1 instanceof Buffer);
  t.equal(result1.compare(expected), 0);

  /*
   * Test the `hex` encoding.
   */
  const result2 = thumbprint(json, { algorithm: 'sha256', encoding: 'hex' });

  t.ok(typeof result2 === 'string');
  t.ok(result2.match(/^[0-9a-f]{64}$/));

  /*
   * Test the `sha1` hash algorithm.
   */
  const result3 = thumbprint(json, { algorithm: 'sha1' });

  t.ok(result3 instanceof Buffer);
  t.equal(result3.length, 20);
});
