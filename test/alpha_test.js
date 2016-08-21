/**
 * Test case for alpha.
 * Runs with mocha.
 */
'use strict'

const alpha = require('../lib/alpha.js')
const assert = require('assert')
const co = require('co')

describe('alpha', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Alpha', () => co(function * () {
    let color = alpha('#E11', 0.2)
    assert.equal(color, 'rgba(238, 17, 17, 0.2)')
  }))
})

/* global describe, before, after, it */
