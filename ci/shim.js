#!/usr/bin/env node

/**
 * Generate shim scripts
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const ababel = require('ababel')

runTasks('shim', [
  () => ababel('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  })
], true)
