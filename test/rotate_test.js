/**
 * Test case for rotate.
 * Runs with mocha.
 */
'use strict'

const rotate = require('../lib/rotate.js')
const assert = require('assert')


describe('rotate', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Rotate', async () => {
    assert.equal(rotate('#AA1', 30), 'hsl(90, 81.8%, 36.7%)')
    assert.equal(rotate('#AA1', 120), 'hsl(180, 81.8%, 36.7%)')
  })

  it('Rotate in LCH color space', async () => {
    assert.equal(rotate('rgb(170, 170, 17)', 0, { lch: true }), 'rgb(170, 170, 17)')
    assert.equal(rotate('rgb(170, 170, 17)', 360, { lch: true }), 'rgb(170, 170, 17)')
    assert.equal(rotate('rgb(170, 170, 17)', -360, { lch: true }), 'rgb(170, 170, 17)')
    assert.equal(rotate('rgb(170, 170, 17)', 20, { lch: true }), 'rgb(126, 180, 48)')
  })
})

/* global describe, before, after, it */
