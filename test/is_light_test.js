/**
 * Test case for isLight.
 * Runs with mocha.
 */
'use strict'

const isLight = require('../lib/is_light.js')
const assert = require('assert')
const co = require('co')

describe('is-light', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Is light', () => co(function * () {
    assert.ok(isLight('#FAA'))
    assert.ok(isLight('#AFF'))
  }))
})

/* global describe, before, after, it */
