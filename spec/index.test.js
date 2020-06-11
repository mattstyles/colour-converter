
// const tape = require('ava')
// const { stringToHsl } = require('../lib')

import test from 'ava'

import { stringToHsl } from '../lib/index.js'

test('It should convert various colour representations to an hsl array', t => {
  t.plan(4)

  t.deepEqual(stringToHsl('#ffffff'), 'hsl(0,0%,100%)', '6 digit hex to hsl')
  t.deepEqual(stringToHsl('#fff'), 'hsl(0,0%,100%)', '3 digit hex to hsl')
  t.deepEqual(stringToHsl('rgb(0, 0, 0)'), 'hsl(0,0%,0%)', 'rgb to hsl')
  t.deepEqual(stringToHsl('rebeccapurple'), 'hsl(270,50%,40%)', 'named to hsl')
})
