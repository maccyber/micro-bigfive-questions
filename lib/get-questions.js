'use strict'

const resolvePath = require('path').resolve
const isFile = require('fs').existsSync
const pagination = require('./pagination')

module.exports = (opts) => {
  const path = resolvePath(`./data/${opts.langCode}/questions.js`)
  opts.file = isFile(path) ? require(path) : false
  const result = pagination(opts)
  return result
}

