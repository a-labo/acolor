/**
 * Test case for parse.
 * Runs with mocha.
 */
'use strict'

const parse = require('../lib/parse.js')
const assert = require('assert')

describe('parse', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Parse', async () => {
    assert.throws(() => parse('#A'))
    assert.equal(parse('#A11').red(), 170)
    assert.equal(parse(parse('#A11')).red(), 170)
  })
})

/* global describe, before, after, it */
