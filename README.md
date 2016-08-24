# json-thumbprint

The thumbprint of a JSON based on [RFC 7638 - JSON Web Key (JWK) Thumbprint](https://tools.ietf.org/html/rfc7638).

## Example

``` js
import { thumbprint } from 'json-thumbprint';

const json = { x: 1, y: 2 };

const result = thumbprint(json, { algorithm: 'sha256', encoding: 'hex' });
```

## API

### thumbprint(json, options)

This function computes the thumbprint of the specified object.

___Arguments___

* `json` - An object to obtain a thumbprint.
* `options.algorithm` - A hash algorithm to compute a thumbprint.
    This option passes the `crypto.createHash` function in node.js.
* `options.encoding` - An encoding to return a computed thumbprint.
    This option passes the `hash.digest` method in node.js.

## License

MIT
