/**
 * Color utility
 * @module acolor
 */

'use strict'


const alpha = require('./alpha')
const darken = require('./darken')
const isDark = require('./is_dark')
const isLight = require('./is_light')
const mix = require('./mix')
const parse = require('./parse')
const rotate = require('./rotate')

exports.alpha = alpha
exports.darken = darken
exports.isDark = isDark
exports.isLight = isLight
exports.mix = mix
exports.parse = parse
exports.rotate = rotate

module.exports = {
  alpha,
  darken,
  isDark,
  isLight,
  mix,
  parse,
  rotate
}
