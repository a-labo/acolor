/**
 * Test case for mix.
 * Runs with mocha.
 */
'use strict'

const mix = require('../lib/mix.js')
const assert = require('assert')
const co = require('co')

describe('mix', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Mix', () => co(function * () {
    assert.equal(mix('#E11', '#111'), 'rgba(128, 17, 17, 1)')
  }))
})

/* global describe, before, after, it */
