/**
 * Test case for parse.
 * Runs with mocha.
 */
'use strict'

const parse = require('../lib/parse.js')
const assert = require('assert')
const co = require('co')

describe('parse', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Parse', () => co(function * () {
    assert.throws(() => parse(null))
    assert.throws(() => parse(''))
    assert.throws(() => parse('#A'))
    assert.equal(parse('#A11').red(), 170)
    assert.equal(parse(parse('#A11')).red(), 170)
  }))
})

/* global describe, before, after, it */
