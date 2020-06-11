
const chroma = require('chroma-js')

exports.stringToHsl = str => {
  return chroma(str).css('hsl')
}
