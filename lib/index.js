
/**
 * Expose looseParseInt
 */

module.exports = looseParseInt

/**
 * looseParseInt
 */

function looseParseInt (str) {
  if (!isNaN(str) && str !== '') {
    return parseInt(str, 10)
  }

  return str
}
