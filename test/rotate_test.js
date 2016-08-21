/**
 * Test case for rotate.
 * Runs with mocha.
 */
'use strict'

const rotate = require('../lib/rotate.js')
const assert = require('assert')
const co = require('co')

describe('rotate', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Rotate', () => co(function * () {
    assert.equal(rotate('#AA1', 30), 'rgba(94, 172, 17, 1)')
    assert.equal(rotate('#AA1', 120), 'rgba(17, 172, 172, 1)')
  }))
})

/* global describe, before, after, it */
