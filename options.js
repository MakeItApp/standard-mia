'use strict'

const eslint = require('eslint')
const path = require('path')
const pkg = require('./package')

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.url.bugs,
  eslint: eslint,
  cmd: Object.keys(pkg.bin)[0],
  tagline: pkg.description,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  cwd: ''
}
