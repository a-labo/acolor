/**
 * Test case for isLight.
 * Runs with mocha.
 */
'use strict'

const isLight = require('../lib/is_light.js')
const assert = require('assert')


describe('is-light', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Is light', async () => {
    assert.ok(isLight('#FAA'))
    assert.ok(isLight('#AFF'))
  })
})

/* global describe, before, after, it */
