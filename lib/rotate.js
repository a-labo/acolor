/**
 * rotate color
 * @function rotate
 * @param {string} color - Color value.
 * @param {number} degree to rotate. 0 to 360
 * @param {Object} [options={}] - Optional settings
 * @returns {string}
 */
'use strict'

const parse = require('./parse')

/** @lends rotate */
function rotate (color, degree, options = {}) {
  const { lch = false } = options
  if (lch) {
    const parsed = parse(color).lch()
    let hue = parsed.color[2]
    hue = (hue + degree) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    parsed.color[2] = hue;
    return parsed.string()
  } else {
    return parse(color).rotate(Number(degree)).string()
  }
}

module.exports = rotate
