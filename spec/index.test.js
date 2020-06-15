
const test = require('ava')
const { stringToHsl, objectToHsl } = require('../lib')

test('It should convert various colour representations to an hsl array', t => {
  t.plan(4)

  t.deepEqual(stringToHsl('#ffffff'), 'hsl(0,0%,100%)', '6 digit hex to hsl')
  t.deepEqual(stringToHsl('#fff'), 'hsl(0,0%,100%)', '3 digit hex to hsl')
  t.deepEqual(stringToHsl('rgb(0, 0, 0)'), 'hsl(0,0%,0%)', 'rgb to hsl')
  t.deepEqual(stringToHsl('rebeccapurple'), 'hsl(270,50%,40%)', 'named to hsl')
})

test('It should convert objects and arrays to have colour values in hsl', t => {
  const tests = [
    ['flat', { rose: '#ea0064' }, { rose: 'hsl(334.36,100%,45.88%)' }],
    ['deep', { deep: { rose: '#ea0064' } }, { deep: { rose: 'hsl(334.36,100%,45.88%)' } }],
    ['array', ['#ea0064'], ['hsl(334.36,100%,45.88%)']]
  ]

  t.plan(tests.length)

  tests.forEach(([id, fixture, expected]) => {
    t.deepEqual(objectToHsl(fixture), expected, `${id}`)
  })
})
