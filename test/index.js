/**
 * Imports
 */

var looseParseInt = require('..')
var test = require('tape')

/**
 * Tests
 */

test('it should parse a number', function (t) {
  t.equal(looseParseInt('1'), 1)
  t.equal(looseParseInt('10'), 10)
  t.equal(looseParseInt('100'), 100)
  t.end()
})

test('does not parse an empty string', function (t) {
  t.equal(looseParseInt(''), '')
  t.end()
})

test('does not parse a string with text', function (t) {
  t.equal(looseParseInt('abc'), 'abc')
  t.end()
})

test('does not parse a string with text and numbers', function (t) {
  t.equal(looseParseInt('123abc'), '123abc')
  t.equal(looseParseInt('abc123'), 'abc123')
  t.end()
})
