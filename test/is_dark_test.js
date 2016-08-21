/**
 * Test case for isDark.
 * Runs with mocha.
 */
'use strict'

const isDark = require('../lib/is_dark.js')
const assert = require('assert')
const co = require('co')

describe('is-dark', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Is dark', () => co(function * () {
    assert.ok(isDark('#311'))
    assert.ok(isDark('#133'))
  }))
})

/* global describe, before, after, it */
