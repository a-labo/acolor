/**
 * Test case for mix.
 * Runs with mocha.
 */
'use strict'

const mix = require('../lib/mix.js')
const assert = require('assert')


describe('mix', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Mix', async () => {
    assert.equal(mix('#E11', '#111'), 'rgb(128, 17, 17)')
  })
})

/* global describe, before, after, it */
