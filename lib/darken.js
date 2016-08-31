/**
 * Darken color
 * @function darken
 * @param {string} color - Color value.
 * @param {number} Amount value. 0.00 to 1.00
 * @returns {string}
 */
'use strict'

const parse = require('./parse')

/** @lends darken */
function darken (color, amount) {
  color = parse(color)
  return color.darken(amount).rgbaString()
}

module.exports = darken
