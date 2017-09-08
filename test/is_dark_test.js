/**
 * Test case for isDark.
 * Runs with mocha.
 */
'use strict'

const isDark = require('../lib/is_dark.js')
const {ok} = require('assert')


describe('is-dark', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Is dark', async () => {
    ok(isDark('#311'))
    ok(isDark('#133'))
  })
})

/* global describe, before, after, it */
