/**
 * Parse a color
 * @function parse
 * @param {value} - Color value
 * @returns {Object} - Parsed color instance.
 */
'use strict'

const color = require('color')

/** @lends parse */
function parse (value) {
  if (!value) {
    value = '#000000'
  }
  const parsed = color(value)
  if (!parsed) {
    throw new Error(`Invalid color: ${value}`)
  }
  return parsed
}

module.exports = parse
