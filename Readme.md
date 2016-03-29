
# loose-parse-int

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Parses a string and returns an integer if possible. If it cannot be converted it'll just return the original string.

## Installation

    $ npm install @f/loose-parse-int

## Usage

```js
var looseParseInt = require('@f/loose-parse-int')

looseParseInt('1') // -> 1
looseParseInt('') // -> ''
looseParseInt('abc') // -> 'abc'
looseParseInt('123abc') // -> '123abc'
```

## API

### looseParseInt(str)

- `str` - A string to convert to an integer

**Returns:** Parsed number or if not possible, the original string

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/loose-parse-int.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/loose-parse-int
[git-image]: https://img.shields.io/github/tag/micro-js/loose-parse-int.svg?style=flat-square
[git-url]: https://github.com/micro-js/loose-parse-int
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/loose-parse-int.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/loose-parse-int
