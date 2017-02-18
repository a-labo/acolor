/**
 * Color utility
 * @module acolor
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get alpha () { return d(require('./alpha')) },
  get darken () { return d(require('./darken')) },
  get isDark () { return d(require('./is_dark')) },
  get isLight () { return d(require('./is_light')) },
  get mix () { return d(require('./mix')) },
  get parse () { return d(require('./parse')) },
  get rotate () { return d(require('./rotate')) }
}
