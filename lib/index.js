
const { map, is } = require('ramda')
const chroma = require('chroma-js')

// Some strings are valid css colour values but chroma takes offense at them
const denyList = [
  'transparent',
  'currentColor'
]

const stringToHsl = str => {
  // Short circuit on known problematic values
  if (denyList.includes(str)) {
    return str
  }

  // Strips to 0 dp
  return chroma(str).css('hsl')
}

const compareNode = node => is(String, node)
  ? stringToHsl(node)
  : deepHslMap(node)

const deepHslMap = map(compareNode)

exports.stringToHsl = stringToHsl
exports.objectToHsl = deepHslMap
