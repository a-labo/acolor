/**
 * Test case for darken.
 * Runs with mocha.
 */
'use strict'

const darken = require('../lib/darken.js')
const assert = require('assert')


describe('darken', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Darken', async () => {
    assert.equal(
      darken('#38E', 0.9),
      'hsl(212.70000000000005, 84.6%, 5.7%)'
    )
  })
})

/* global describe, before, after, it */
