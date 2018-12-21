/**
 * Color utility
 * @module acolor
 */

'use strict'

const _d = (module) => module && module.default || module

const alpha = _d(require('./alpha'))
const darken = _d(require('./darken'))
const isDark = _d(require('./is_dark'))
const isLight = _d(require('./is_light'))
const mix = _d(require('./mix'))
const parse = _d(require('./parse'))
const rotate = _d(require('./rotate'))

module.exports = {
  alpha,
  darken,
  isDark,
  isLight,
  mix,
  parse,
  rotate
}
