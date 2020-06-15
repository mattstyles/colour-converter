
const { map, is } = require('ramda')
const chroma = require('chroma-js')

const stringToHsl = str => {
  return chroma(str).css('hsl')
}

const compareNode = node => is(String, node)
  ? stringToHsl(node)
  : deepHslMap(node)

const deepHslMap = map(compareNode)

exports.stringToHsl = stringToHsl
exports.objectToHsl = deepHslMap
