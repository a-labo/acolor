/**
 * Test case for darken.
 * Runs with mocha.
 */
'use strict'

const darken = require('../lib/darken.js')
const assert = require('assert')
const co = require('co')

describe('darken', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Darken', () => co(function * () {
    assert.equal(
      darken('#38E', 0.9),
      'rgba(2, 14, 28, 1)'
    )
  }))
})

/* global describe, before, after, it */
