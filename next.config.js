const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')(['waskode']);
module.exports = withTM(withFonts());